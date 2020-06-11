import React from 'react'
import './card.css'

function Card({modo,price,space,user,send}){
   
    return(
         
            <div className="cardB">
                <div className="grid">
                    
                     <p className="mood">{modo}</p>
                     <p className="price">{price}</p>
                     <p className="space">{space}</p>
                     <p className="user">{user}</p>
                     <p className="send ">{send}</p>
                    <div className="button">
                    <input type="submit" value="LEARN MORE" className="learn" />
                    </div>
                     
                  
                </div>   
              
            </div>    

       

      
    )
}

export default Card;