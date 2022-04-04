import "./styles.css";
import { BrowserRouter, Link, Route, Switch, HashRouter } from 'react-router-dom';

import SubmitIdeaForm from './components/SubmitIdea/SubmitIdeaForm';
import WelcomePage from './components/welcomepage.js';
import Comments from './components/Comments/CommentBox';
import Nav from './components/Nav/nav';
import SubmitForm from './components/submitform';

import React, { useState } from 'react';
import IdeaCards from "./components/IdeaCards/StyledIdeaCards";
import CardsWrapper from "./components/CardsWrapper/StyledCardsWrapper";
import Card from "./components/Card/Card.js";
import { env } from "./utils/EnvironmentVariables";
import axios from "axios";

export default function App() {

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  React.useEffect(() => {
    //axios.get('http://localhost:1337/idea-cards/')
    axios.get(`https://api-staging.devlaunchers.org/idea-cards`,
      {
        withCredentials: true,
      }
    )
      .then(response => {
        const getCards = response.data.map((item) => {
          return item;
        });

        setCards(getCards);
      });
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path="/" exact component={WelcomePage} />
          <Route exact path="/form" exact component={SubmitIdeaForm}>
            <SubmitIdeaForm />
          </Route>
          <Route exact path="/test" component={SubmitForm}>
            <SubmitForm />
          </Route>
          <Route exact path="/cards">
            <IdeaCards>
              <CardsWrapper>
                {cards.map((item) => {
                  return <Card key={item.id} cards={item} setSelectedCard={setSelectedCard} />
                })}
              </CardsWrapper>
            </IdeaCards>
          </Route>
          <Route exact path="/workshopping/:id">
            <Comments ideaName={selectedCard.ideaName} selectedCard={selectedCard} />
          </Route>
        </Switch>
      </HashRouter>
    </div >
  );
}
