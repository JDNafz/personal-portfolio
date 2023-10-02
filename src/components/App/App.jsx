import "./App.css";

import { HashRouter as Router, Route } from "react-router-dom";
import { Card } from "@mui/material";
import ReduxFeeling from "../redux-feeling/ReduxFeeling";
import Header from "../Header/Header";
import WelcomePage from "../WelcomPage/WelcomePage";

export default function App() {
  return (
    <Router>
      <Route path="/">
        <div id="banner">
          <Header />
        </div>
      </Route>
      <WelcomePage />

      <Route path="/portfolio">
        <Card />
      </Route>
      <Route path="/feedback">
        <ReduxFeeling />
      </Route>
    </Router>
  ); //end return
} //end App
