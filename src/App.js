import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import SetPage from "./pages/SettingPage";
import { symbols } from "./constants";
import { createDeck, shuffle } from "./utilities";

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

    setDeck(
      deck.map((card, i) =>
        i !== clickedCard
          ? card
          : { ...card, flipped: !card.flipped, className: "card flipped" }
      )
    );
    setCounter(counter + 1);
    setLastCard(clickedCard);

    if (counter === 1) {
      if (deck[lastCard].symbol === deck[clickedCard].symbol) {
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

    console.log(counter);
    console.log(deck[lastCard], deck[clickedCard]);
  };

  useEffect(() => {
    let winningDeck = deck.filter((card) => !card.matched);
    !winningDeck.length
      ? (currentGameState = "win")
      : (currentGameState = "play");

    if (currentGameState === "win") alert("You Won!");
    return () => {
      // cleanup;
    };
  }, [deck]);

  return (
    <>
      <Switch>
        <Route path="/milestone-3/" exact>
          <HomePage />
        </Route>

        <Route path="/milestone-3/game" exact>
          <GamePage
            onClick={onClick}
            totalTurns={turns}
            deck={deck}
            onReset={onReset}
          />
        </Route>

        <Route path="/milestone-3/settings" exact component={SetPage} />
      </Switch>
    </>
  );
}

export default App;
