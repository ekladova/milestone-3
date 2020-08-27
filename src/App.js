import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import SetPage from "./pages/SettingPage";
import { symbols } from "./constants";
import { createDeck, shuffle } from "./utilities";
import { ProductPage } from "./pages";

const allCards = symbols.concat(symbols);

function App() {
  let currentGameState = "";

  const createNewDeck = () => createDeck(shuffle(allCards));
  const [deck, setDeck] = useState(createNewDeck());
  const [counter, setCounter] = useState(0);
  const [turns, setTurns] = useState(0);

  const onReset = () => {
    setDeck(createNewDeck());
    setTurns(0);
  };

  const [lastCard, setLastCard] = useState(null);

  const onClick = (e) => {
    currentGameState = "play";
    const clickedCard = +e.target.dataset.number;

    if (deck[lastCard] !== deck[clickedCard]) {
      setDeck(
        deck.map((card, i) =>
          i !== clickedCard
            ? card
            : { ...card, flipped: !card.flipped, className: "card flipped" }
        )
      );
      setCounter(counter + 1);
      setLastCard(clickedCard);
    }

    if (counter === 1 && deck[lastCard] !== deck[clickedCard]) {
      if (
        deck[lastCard].symbol === deck[clickedCard].symbol &&
        deck[lastCard] !== deck[clickedCard]
      ) {
        setDeck(
          deck.map((card) =>
            card.symbol === deck[lastCard].symbol
              ? {
                  ...card,
                  matched: true,
                  flipped: !card.flipped,
                  className: "card flipped",
                }
              : card
          )
        );
        setLastCard(null);
        setCounter(0);
      } else {
        setCounter(0);
        setTimeout(
          () =>
            setDeck(
              deck.map((card, i) =>
                card.flipped
                  ? { ...card, flipped: !card.flipped, className: "card" }
                  : card
              )
            ),
          500
        );
        setLastCard(null);
      }
      setTurns(turns + 1);
    }
  };

  useEffect(() => {
    let winningDeck = deck.filter((card) => !card.matched);
    !winningDeck.length
      ? (currentGameState = "win")
      : (currentGameState = "play");

    if (currentGameState === "win") {
      alert("You Won!");
    }
    return () => {
      // cleanup;
    };
  }, [deck]);

  return (
    <>
      <GamePage
        onClick={onClick}
        totalTurns={turns}
        deck={deck}
        onReset={onReset}
      />
      {/* <Switch>
        <Route path="/" exact>
          
        </Route> */}

      {/* <Route path="/game" exact>
           <HomePage /> 
        </Route>

        <Route path="/settings" exact component={SetPage} />

        <Route path="/products" component={ProductPage} />
        <Route path="*" render={() => <img></img>} />*/}
      {/* </Switch> */}
    </>
  );
}

export default App;
