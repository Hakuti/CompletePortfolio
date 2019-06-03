import React from 'react'
import './CardPortfolio.css'
import { Player } from 'video-react';
import { pause, play } from 'video-react/lib/actions/player';

 const CardPortfolio = props => {
    



    
 return (
     <div className="card-div-container">
     <div class="card-img-holder-container">
     {/* <Player
      
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    /> */}
      {/* <video                 
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    muted={true}
    autoPlay={true}
    
    ></video>  */}
    <img src={props.image}/>
        {/* <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x" alt="Img-Box"/> */}
     </div>
     <div className="card-portfolio-title">Govi</div>

     <div className="line-decorator-div"></div>
     <div className="card-content-div">
     <p>{props.description}</p>
     </div>

     <div className="card-footer-div">
         <button><a href={props.link} target="_blank">Demo</a></button>
         <button>Github</button>
         
     </div>

     </div>
 )
}

export default CardPortfolio;