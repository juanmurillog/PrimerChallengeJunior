import React from 'react'
import './card.css'

function Card(){
    return(
         
            <div className="cardB">
                <div className="grid">
                    
                     <p className="mood">Basic</p>
                     <p className="price">$199.99</p>
                     <p className="space">500 GB Storage</p>
                     <p className="user">2 Users Allowed</p>
                     <p className="send ">Send Up to 3 GB</p>
                    <div className="button">
                    <input type="submit" value="LEARN MORE" className="learn" />
                    </div>
                     
                  
                </div>   
              
            </div>    

       

      
    )
}

export default Card;