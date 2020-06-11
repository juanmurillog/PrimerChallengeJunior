import React from 'react'
import './cardP.css'

function CardP(){
    return(
         
            <div className="wraper">
                <div className="grid">
                    
                     <p className="mood">Profesional</p>
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

export default CardP;