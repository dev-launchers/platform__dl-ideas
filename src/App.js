import "./styles.css";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import SubmitForm from './components/submitform.js';
import WelcomePage from './components/welcomepage.js';
import { UserDataProvider } from "./UserDataContext";
import Header from "./components/Header/"

export default function App() {
  return (
    <UserDataProvider>
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" exact component = {WelcomePage}/>
          <Route exact path="/form" exact component = {SubmitForm}>
            <SubmitForm/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </UserDataProvider>
  );
}
