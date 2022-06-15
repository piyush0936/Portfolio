import React, { useState } from "react";
import "./Projects.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import netflix from "../../assests/img/netflix.png";

const Projects = () => {
  const [datas, setDatas] = useState([
    {
      imageUrl: netflix,
      alt: "Project 1 image",
      heading: "Netflix Clone",
      description: "This is a Netflix Clone Project",
    },
    {
      imageUrl: netflix,
      alt: "Project 2 image",
      heading: "Netflix Clone2",
      description: "This is a Netflix Clone  2 Project",
    },
  ]);
  return (
    <div className="Projects">
      <div className="ProjectsHeading">Projects section below (done)</div>
      <div className="Cards">
        {datas.map((data) => {
          return (
            <div>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    // image={netflix}
                    image={data.imageUrl}
                    alt={data.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" variant="contained">
                    Visit App
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
