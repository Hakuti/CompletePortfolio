import React, { Component } from "react";
import CardPortfolio from "../../CardPortfolio/CardPortfolio";
import "./Home.css";
import { Helmet } from "react-helmet";
import { Player } from "video-react";

const descriptionArr = [
  "Music quiz app, guess the song playing, you have a 10 second demo for each song.",
  "Find parties going on, and go to those events! ",
  "Mobile racing app, race with other people online using the matchmaking system",
];

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <style>{"body { background-color: #30D2FF; }"}</style>
        </Helmet>
        <h5 className="home-h5">Jean Canales</h5>
        <h6 className="home-h6">Full Stack Developer</h6>
        <h6 className="project-h6"> Projects</h6>
        <div className="home-portfolio-wrapper horizontal-card-scroll">
          <CardPortfolio
            description={descriptionArr[0]}
            title={"Funker"}
            image={"/images/funkerL.gif"}
            linkDemo={"https://thawing-hollows-26473.herokuapp.com/"}
            linkGit={"https://github.com/Hakuti/Project2"}
          ></CardPortfolio>
          <CardPortfolio
            description={descriptionArr[1]}
            title={"Partihaus"}
            image={"/images/partihaus.gif"}
            linkDemo={"https://desolate-crag-32503.herokuapp.com/Login"}
            linkGit={"https://github.com/Hakuti/mern-auth"}
          ></CardPortfolio>
          <CardPortfolio
            description={descriptionArr[2]}
            title={"Govi"}
            image={"/images/govi.gif"}
            link={""}
          ></CardPortfolio>
        </div>

        {/* <CardPortfolio></CardPortfolio> */}
      </div>
    );
  }
}
