import "./styles.css";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Form from './components/form.js';
import WelcomePage from './components/welcomepage.js';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" exact component={WelcomePage}/>
          <Route exact path="/form" exact component = {Form}>
            <Form/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
