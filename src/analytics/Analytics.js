import ReactGA from "react-ga";

export const initGA = () => {
    ReactGA.initialize("G-L7ESSG59EK");
  };
  

export const logPageView = () => {

ReactGA.set({ page: `${window.location.pathname}` });
ReactGA.pageview(`${window.location.pathname}`);
};