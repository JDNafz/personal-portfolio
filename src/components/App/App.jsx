import "./App.css";
import { Link } from "react-router-dom";

import { HashRouter as Router, Route } from "react-router-dom";
import { Card } from "@mui/material";
import ReduxFeeling from "../redux-feeling/ReduxFeeling";

export default function App() {
  return (
    <Router>
      <div className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/feedback"}>Feedback App</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
      </div>

      <Route path="/portfolio">
        <Card />
      </Route>

      <ReduxFeeling />
    </Router>
  ); //end return
} //end App
