import React from 'react'
import './cardP.css'

function CardP({modo,price,space,user,send}){
  
    return(
           
            <div className="cardP">
                <div className="grid">
                    
                     <p className="moodP">{modo}</p>
                     <p className="priceP">{price}</p>
                     <p className="spaceP">{space}</p>
                     <p className="userP">{user}</p>
                     <p className="sendP">{send}</p>
                    <div className="buttonP">
                    <input type="submit" value="LEARN MORE" className="learnP" />
                    </div>
                     
                  
                </div>   
              
            </div>    

       

      
    )
}

export default CardP;