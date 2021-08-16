import { StrictMode } from "react";
import ReactDOM from "react-dom";

import GetSheetsData from "./GetSheetsData/GetSheetsData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GetSheetsData />
  </StrictMode>,
  rootElement
);
