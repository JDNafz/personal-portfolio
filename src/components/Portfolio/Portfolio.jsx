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
        <Card sx={{ maxWidth: 500, margin: "auto" }}>
          <CardActionArea onClick={() => handleClick(movie)}>
            <CardMedia
              component="img"
              image="images/movie-demo.gif"
              alt={`Image of Portfolio example.`}
            />
            <CardContent>
              <Typography variant="subtitle" component="div">
                Movie Database
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 500, margin: "auto" }}>
          <CardActionArea onClick={() => handleClick(movie)}>
            <CardMedia
              component="img"
              image="images/todo-list-app.gif"
              alt={`Image of Portfolio example.`}
            />
            <CardContent>
              <Typography variant="subtitle" component="div">  
                Todo-list
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="fillBottom" />
    </>
  );
}
