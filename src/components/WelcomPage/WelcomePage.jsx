import Avatar from "@mui/material/Avatar";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <div className="welcomePage">
      <Avatar
        alt="JD image"
        src="../../../public/JD.jpg"
        sx={{ width: 240, height: 240 }}
      />
      <h1 id="jdName">
        Hi, my <br />
        name is <b>JD</b>
      </h1>
    </div>
  );
}
