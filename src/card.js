import React from 'react'
import './card.css'

function Card(){
    return(
         
            <div className="wrapper">
                <div className="grid">
                    
                     <p className="mood">Basic</p>
                     <p className="price">$199.99</p>
                     <p className="espacio">500 GB Storage</p>
                     <p>2 Users Allowed</p>
                     <p>Send Up to 3 GB</p>
                    <div className="button">
                    <input type="submit" value="LEARN MORE" className="learn" />
                    </div>
                     
                  
                </div>   
              
            </div>    

       

      
    )
}

export default Card;