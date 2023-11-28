// import React from "react";
// import "./WelcomePage.css";

// export default function WelcomePage() {
//   return (
//     <div className="welcomePage">
//       <div id="picAndName">
//         <h1 id="jdName">
//           Hi, my <br />
//           name is <b>Mohamud</b>
//         </h1>
//         <div id="spacer1" />
//         <img id="JDImage" alt="JD" src="images/sq.jpg" />
//       </div>
//       <div className="introText">
//         <p>
//           Welcome to my portfolio! I'm passionate about creating innovative and
//           user-friendly web applications.
//         </p>
//       </div>
//       <h4 id="checkOutWork">Checkout some of my work</h4>
//       <div id="line1"></div>
//       <h4 id="scrollLabel">scroll...</h4>
//     </div>
//   );
// }
import React from "react";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="intro-container">
        <h1 className="jd-name">
          Hi, I'm <span className="highlight">Mohamud</span>
        </h1>
        <img className="jd-image" alt="JD" src="images/sq.jpg" />
        <p className="intro-text">
          Welcome to my portfolio! I specialize in creating innovative and
          user-friendly web applications.
        </p>
      </div>
      <div className="work-section">
        <h2 className="check-out-work">Check out some of my work</h2>
        <div className="line"></div>
        <p className="scroll-label">Scroll down to explore</p>
      </div>
    </div>
  );
}
