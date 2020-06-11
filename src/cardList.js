import React from 'react';
import './cardList.css';
import Card from './card.js';
import CardP from './cardP.js'

function CardList(){

    const cardListBasic=[
        {
            Id:1,
            modo: "Basic",
            price: "$19.99",
            space: "500 GB Storage",
            user : "2 Users Allowed",
            send: "Send up to 3 GB"
        }
       
       
    ]

    const cardListPro=[
        
            {
                Id:2,
                modo: "Profesional",
                price: "$24.99",
                space: "1 TB Storage",
                user : "5 Users Allowed",
                send: "Send up to 10 GB"
            }
            
        
    ]
    
    const cardListMaster=[
        
            {
                Id:3,
                modo: "Master",
                price: "$39.99",
                space: "2 TB Storage",
                user : "10 Users Allowed",
                send: "Send up to 20 GB"
            }
        
    ]

    return(
           <div className="wrapp">
              <div className="content">
                  <article className="basic">
                   {
                       cardListBasic.map(({Id,modo,price,space,user,send}) =>
                       <Card key={Id} 
                             modo={modo}
                             price={price}
                             space = {space}
                             user = {user}
                             send ={ send}
                             />
                       )
                   }
                   
                  </article>
                  <article className="profesional">
                   
                   {
                           cardListPro.map(({Id,modo,price,space,user,send}) =>
                           <CardP key={Id} 
                                 modo={modo}
                                 price={price}
                                 space = {space}
                                 user = {user}
                                 send ={ send}
                                 />
                           )
                   }
                  
                  </article>
                  <article className="basic">
                   
                   {
                           cardListMaster.map(({Id,modo,price,space,user,send}) =>
                           <Card key={Id} 
                                 modo={modo}
                                 price={price}
                                 space = {space}
                                 user = {user}
                                 send ={ send}
                                 />
                           )
                   }
                  </article>
                
                  
              </div>
           </div>
    )
}

export default CardList