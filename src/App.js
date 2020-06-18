import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import SetPage from "./pages/SettingPage";
import { symbols } from "./constants";
import { createDeck, shuffle } from "./utilities";

const allCards = symbols.concat(symbols);

function App() {
  const createNewDeck = () => createDeck(shuffle(allCards));
  const [deck, setDeck] = useState(createNewDeck());
  const onReset = () => setDeck(createNewDeck());
  const [counter, setCounter] = useState(0);

  const [turns, setTurns] = useState(0);
  const [lastCard, setLastCard] = useState(null);

  const onClick = (e) => {
    const clickedCard = +e.target.dataset.number;

    setDeck(
      deck.map((card, i) =>
        i !== clickedCard ? card : { ...card, flipped: !card.flipped }
      )
    );
    setLastCard(clickedCard);
    setCounter(counter + 1);

    if (counter === 1) {
      if (deck[lastCard].symbol === deck[clickedCard].symbol) {
        deck[lastCard].matched = true;
        deck[+e.target.dataset.number].matched = true;
        console.log("match");
        setCounter(0);
      } else {
        setCounter(0);
        setTimeout(
          () =>
            setDeck(
              deck.map((card, i) =>
                card.flipped ? { ...card, flipped: !card.flipped } : card
              )
            ),
          300
        );
        setLastCard(null);
      }
      setTurns(turns + 1);
    }
    console.log(counter);
    console.log(lastCard, clickedCard);
    // console.log(match);
  };

  return (
    <>
      <div>Some content, which is always here</div>
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/game" exact>
          <GamePage
            onClick={onClick}
            totalTurns={turns}
            deck={deck}
            onReset={onReset}
          />
        </Route>

        <Route path="/settings" exact component={SetPage} />
      </Switch>
    </>
  );
}

export default App;
