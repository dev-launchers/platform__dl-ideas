import "./styles.css";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import SubmitForm from './components/submitform.js';
import WelcomePage from './components/welcomepage.js';

import React from 'react';
import IdeaCards from "./components/IdeaCards/StyledIdeaCards";
import CardsWrapper from "./components/CardsWrapper/StyledCardsWrapper";
import Card from "./components/Card/Card.js";

export default function App() {

  const [cards, setCards] = React.useState([{
    project: 'Thought Process',
    description: 'An online, community-based idea or problem solving tool',
    type: 'Web Development',
    positions: 'Developer, Digital Artist, UX/UI, Marketing',
    time: '5 hrs'
  },
  {
    project: 'Ergonomic Digits',
    description: 'Create an Ergonomic layout for mobile screens with the goal of minimizing thumb movement',
    type: 'AI / ML',
    positions: 'Developer',
    time: '3 - 5 hrs'
  },
  {
    project: 'Dev Mentors',
    description: 'Connecting Individuals Seeking Mentorship with Potential Mentors Based on their Area of Interest',
    type: 'Web Development',
    positions: 'AI / ML',
    time: '10 hrs'
  }
]
);
    

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
          <Route exact path="/" exact component = {WelcomePage}/>
          <Route exact path="/form" exact component = {SubmitForm}>
            <SubmitForm/>
          </Route>
          <Route exact path="/cards">
            <IdeaCards>
              <CardsWrapper>
                {cards.map((item, index) => {
                  return <Card key={index} cards={item} />
                })}
                
              </CardsWrapper>
            </IdeaCards>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
