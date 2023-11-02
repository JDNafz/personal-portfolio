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
        <div className="cardContainer">
          <a href="https://www.jcbyjd.com">
            <Card className="portfolioCard">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="images/JCbyJD.gif"
                  alt={`Image of Portfolio example.`}
                />
              </CardActionArea>
            </Card>
          </a>
          <span>JustChess</span>
        </div>

        <div className="cardContainer">
          <a href="https://weekend-movie-sagas-jdn-d35d1fb91beb.herokuapp.com/#/">
            <Card className="portfolioCard">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="images/movie-demo.gif"
                  alt={`Image of Portfolio example.`}
                />
              </CardActionArea>
            </Card>
          </a>
          <span> Movie Database</span>
        </div>

        <div className="cardContainer">
          <a href="https://react-gallery-jd-144f294c43b1.herokuapp.com/">
            <Card className="portfolioCard">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="images/image-gallery.gif"
                  alt={`Image of Portfolio example.`}
                />
              </CardActionArea>
            </Card>
          </a>
          <span> image Gallery </span>
        </div>
        <div className="cardContainer">
          <a href="https://to-do-list-jdn-d1ad334ecfe5.herokuapp.com/">
            <Card className="portfolioCard">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="images/todolist.gif"
                  alt={`Image of Portfolio example.`}
                />
              </CardActionArea>
            </Card>
          </a>
          <span> Simple To-do List</span>
        </div>

        <div className="cardContainer">
          <a href="https://server-side-calculator-jdn-6b027b5f3ade.herokuapp.com/">
            <Card className="portfolioCard">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="images/EmployeeCalcProject.png"
                  alt={`Image of Portfolio example.`}
                />
              </CardActionArea>
            </Card>
          </a>
          <span> Calculator </span>
        </div>
      </div>

      <div className="fillBottom" />
    </>
  );
}
