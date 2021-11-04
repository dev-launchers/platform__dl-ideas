import "./styles.css";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import SubmitForm from './components/submitform.js';
import WelcomePage from './components/welcomepage.js';

import React from 'react';
import IdeaCards from "./components/IdeaCards/StyledIdeaCards";
import CardsWrapper from "./components/CardsWrapper/StyledCardsWrapper";
import Card from "./components/Card/Card.js";
import { env } from "./utils/EnvironmentalVariables";
import axios from "axios";

export default function App() {

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${env().STRAPI_URL}/idea-cards/`)
      .then(response => {
        const getCards = response.data.map((item) => {
          return item;
        });

        setCards(getCards);
      });

  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/cards">Cards</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" exact component={WelcomePage} />
          <Route exact path="/form" exact component={SubmitForm}>
            <SubmitForm />
          </Route>
          <Route exact path="/cards">
            <IdeaCards>
              <CardsWrapper>
                {cards.map((item) => {
                  return <Card key={item.id} cards={item} />
                })}
              </CardsWrapper>
            </IdeaCards>
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}
