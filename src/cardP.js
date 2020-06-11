import React from 'react'
import './cardP.css'

function CardP(){
    return(
         
            <div className="cardP">
                <div className="grid">
                    
                     <p className="moodP">Profesional</p>
                     <p className="priceP">$199.99</p>
                     <p className="spaceP">500 GB Storage</p>
                     <p className="userP">2 Users Allowed</p>
                     <p className="sendP">Send Up to 3 GB</p>
                    <div className="buttonP">
                    <input type="submit" value="LEARN MORE" className="learnP" />
                    </div>
                     
                  
                </div>   
              
            </div>    

       

      
    )
}

export default CardP;