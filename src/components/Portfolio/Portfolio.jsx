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
      <a href="www.jcbyjd.com">
          <Card className="portfolioCard">
            <CardActionArea >
              <CardMedia
                component="img"
                image="images/JCbyJD.gif"
                alt={`Image of Portfolio example.`}
              />
            </CardActionArea>
            <span>Completed October 23rd 2023</span>
          </Card>
        </a>

        <a href="https://weekend-movie-sagas-jdn-d35d1fb91beb.herokuapp.com/#/">
          <Card className="portfolioCard">
            <CardActionArea>
              <CardMedia
                component="img"
                image="images/movie-demo.gif"
                alt={`Image of Portfolio example.`}
              />
            </CardActionArea>
            <span> 2 Day Sprint completed on October 1st, 2023</span>
          </Card>
        </a>

        <a href="https://react-gallery-jd-144f294c43b1.herokuapp.com/">
          <Card className="portfolioCard">
            <CardActionArea>
              <CardMedia
                component="img"
                height="330"
                image="images/react-gallery.PNG"
                alt={`Image of Portfolio example.`}
              />
            </CardActionArea>
            <span> 2 Day Sprint completed on September 17th, 2023</span>

          </Card>
        </a>

        <a href="https://to-do-list-jdn-d1ad334ecfe5.herokuapp.com/">
          <Card className="portfolioCard">
            <CardActionArea>
              <CardMedia
                component="img"
                image="images/todo-list-app.gif"
                alt={`Image of Portfolio example.`}
              />
            </CardActionArea>
            <span> 2 Day Sprint completed on September 3rd, 2023</span>
          </Card>
        </a>
        <a href="https://server-side-calculator-jdn-6b027b5f3ade.herokuapp.com/">
          <Card className="portfolioCard">
            <CardActionArea>
              <CardMedia
                component="img"
                height="330"
                image="images/EmployeeCalcProject.png"
                alt={`Image of Portfolio example.`}
              />
            </CardActionArea>
            <span> 2 Day Sprint completed on August 24th, 2023</span>

          </Card>
        </a>
      </div>
      <div className="fillBottom" />
    </>
  );
}
