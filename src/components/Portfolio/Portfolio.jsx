import "./Portfolio.css";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Portfolio() {
  return (
    <>
      <div id="portfolioContainer">
      <a href="https://weekend-movie-sagas-jdn-d35d1fb91beb.herokuapp.com/#/">
          <Card className="portfolioCard">
            <CardActionArea onClick={() => handleClick("movie")}>
              <CardMedia
                component="img"
                image="images/movie-demo.gif"
                alt={`Image of Portfolio example.`}
              />
            </CardActionArea>
          </Card>
        </a>
        
        <a href="https://weekend-movie-sagas-jdn-d35d1fb91beb.herokuapp.com/#/">
          <Card className="portfolioCard">
            <CardActionArea onClick={() => handleClick("movie")}>
              <CardMedia
                component="img"
                image="images/movie-demo.gif"
                alt={`Image of Portfolio example.`}
              />
            </CardActionArea>
          </Card>
        </a>

        <a href="https://to-do-list-jdn-d1ad334ecfe5.herokuapp.com/">
          <Card className="portfolioCard">
            <CardActionArea onClick={() => handleClick("to-do")}>
              <CardMedia
                component="img"
                image="images/todo-list-app.gif"
                alt={`Image of Portfolio example.`}
              />
            </CardActionArea>
          </Card>
        </a>
        <a href="https://server-side-calculator-jdn-6b027b5f3ade.herokuapp.com/">
          <Card className="portfolioCard">
            <CardActionArea onClick={() => handleClick("calculator")}>
              <CardMedia
                component="img"
                height="330"
                image="images/EmployeeCalcProject.png"
                alt={`Image of Portfolio example.`}
              />
            </CardActionArea>
          </Card>
        </a>
      </div>
      <div className="fillBottom" />
    </>
  );
}
