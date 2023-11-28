import { Link } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="socials">
        {/* TODO add icons */}
        <a href="https://github.com/Moody0069">Github</a>
        <a href="https://www.linkedin.com/in/mohamud-moalim-63446625b/">Linkedin</a>
      </div>
      <div className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/feedback"}>Feedback App</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
      </div>
    </div>
  );
}
