import React, { Component } from 'react';
import CardPortfolio from '../../CardPortfolio/CardPortfolio';
import "./Home.css"
import { Helmet } from 'react-helmet';
import { Player } from 'video-react';



export default class Home extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <Helmet>
                    <style>
                    {'body { background-color: #30D2FF; }'}
                    </style>
                </Helmet>
                <h5 className="home-h5">Jean Canales</h5>
                <h6 className="home-h6">Full Stack Developer</h6>
                <h6 className="project-h6"> Projects</h6>
                <div className="home-portfolio-wrapper horizontal-card-scroll">
                
                <CardPortfolio></CardPortfolio>
                <CardPortfolio></CardPortfolio>
                <CardPortfolio></CardPortfolio>
                </div>

                {/* <CardPortfolio></CardPortfolio> */}
            </div>
        )
    }
}