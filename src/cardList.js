import React from 'react';
import './cardList.css';
import Card from './card.js';
import CardP from './cardP.js'

function CardList(){

    const cardListData=[
        {
            modo: "basico",
            price: ""
        }
    ]

    return(
           <div className="wrapp">
              <div className="content">
                  <article className="basic">
                   <Card/>
                   
                  </article>
                  <article className="profesional">
                   <CardP/>
                   
                  </article>

                  <article className="profesional">
                   <Card/>
                   
                  </article>
                
                  
              </div>
           </div>
    )
}

export default CardList