import "./styles.css";
import { Route, Switch, HashRouter } from 'react-router-dom';
import SubmitIdeaForm from './components/SubmitIdea/SubmitIdeaForm';
import WelcomePage from './components/welcomepage.js';
import WorkshoppingPage from './components/WorkshoppingPage/WorkshoppingPage.js';
import Nav from './components/Nav/nav';
import SubmitForm from './components/submitform';
import React, { useState } from 'react';
import IdeaCardList from "./components/Card/IdeaCardList"


export default function App() {
  const [selectedCard, setSelectedCard] = useState({});


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
            <IdeaCardList/>
          </Route>
          <Route exact path="/workshopping/:id">
            <WorkshoppingPage ideaName={selectedCard.ideaName} selectedCard={selectedCard} />
          </Route>
        </Switch>
      </HashRouter>
    </div >
  );
}
