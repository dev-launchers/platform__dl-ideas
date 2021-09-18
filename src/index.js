import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

//import GetSheetsData from "./GetSheetsData/GetSheetsData";
import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  rootElement
);
