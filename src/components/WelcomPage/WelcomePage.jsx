import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <div className="welcomePage">
      <div id="picAndName">
        <h1 id="jdName">
          Hi, my <br />
          name is <b>JD</b>
        </h1>
        <div id="spacer1" />
        <img
          id="JDImage"
          alt="JD image"
          src="images/jd-sq.jpg"
        />
      </div>
      <h4 id="checkOutWork">Checkout some of my work</h4>
      <div id="line1"></div>
      <h4 id="scrollLabel">scroll...</h4>
    </div>
  );
}
