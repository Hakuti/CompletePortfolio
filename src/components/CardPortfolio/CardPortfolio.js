import React from 'react'
import './CardPortfolio.css'

 const CardPortfolio = props => {
 return (
     <div className="card-div-container">
     <div class="card-img-holder-container">
        <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x" alt="Img-Box"/>
     </div>
     <div className="card-portfolio-title">Govi</div>

     <div className="line-decorator-div"></div>
     <div className="card-content-div">
     <p>Mobile racing app, race with other people online using the matchmaking system</p>
     </div>

     <div className="card-footer-div">
         <button>Demo</button>
         <button>Github</button>
         
     </div>

     </div>
 )
}

export default CardPortfolio;