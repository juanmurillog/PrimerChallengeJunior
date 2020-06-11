import React from 'react';
import './header.css'
 function Header(){
     return(
        <div className="header">
            <h1>
                 Our Pricing 
            </h1>
            <div className="time">
                <span className="anual"> Annually</span>
                 <div className="button">
                 <input type="checkbox" className="checkbox" id="checkbox"></input>
                 <label className="switch" htmlFor="checkbox"></label>
                 </div>
               
                <span className="mensual"> Monthly</span>
            </div>
        </div>

     )
 }

 export default Header;