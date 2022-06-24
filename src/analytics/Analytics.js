import ReactGA from "react-ga";

export const initGA = () => {
    ReactGA.initialize("UA-180113136-1");
  };


export const logPageView = () => {

ReactGA.set({ page: `${window.location.pathname}dl-ideas` });
ReactGA.pageview(`${window.location.pathname}dl-ideas`);
};