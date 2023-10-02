import { Link } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      {/* add banner image Forest eberhard */}
      <div className="socials">
        {/* TODO add icons */}
        <a href="https://github.com/JDNafz">Github</a>
        <a href="https://linkedin.com/in/jdnafziger">Linkedin</a>
      </div>
      <div className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/feedback"}>Feedback App</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
      </div>
    </div>
  );
}
