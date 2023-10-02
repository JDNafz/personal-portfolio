import "./App.css";

import { HashRouter as Router, Route } from "react-router-dom";
import ReduxFeeling from "../redux-feeling/ReduxFeeling";
import Header from "../Header/Header";
import WelcomePage from "../WelcomePage/WelcomePage";
import Portfolio from "../Portfolio/Portfolio";

export default function App() {
  return (
    <Router>
      <Route path="/">
        <Header />
        <WelcomePage />
        <Portfolio />
      </Route>
      <Route path="/feedback">
        <ReduxFeeling />
      </Route>
    </Router>
  ); //end return
} //end App
