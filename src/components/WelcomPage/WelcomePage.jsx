import Avatar from "@mui/material/Avatar";
import "./WelcomePage.css";
import { Box } from "@mui/material";

export default function WelcomePage() {
  return (
    <div className="welcomePage">
      <div id="picAndName">
        <Box
          id="JDImage"
          component="img"
          alt="JD image"
          src="images/jd-sq.jpg"
          sx={{ width: 400, borderRadius: 50, margin: 0 }}
        />
        <h1 id="jdName">
          Hi, my <br />
          name is <b>JD</b>
        </h1>
      </div>
      <h4 id="checkOutWork">Checkout some of my work</h4>
      <div id="line1"></div>
      <h4 id="scrollLabel">scroll...</h4>
    </div>
  );
}
