import "./App.css";

import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import WelcomePage from "../WelcomePage/WelcomePage";
import Portfolio from "../Portfolio/Portfolio";

export default function App() {
  return (
    <>
      <Header />
      <WelcomePage />
      <Portfolio />
    </>
  ); //end return
} //end App
