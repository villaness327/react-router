import React from 'react';
import {NavLink} from 'react-router-dom'; //Reemplaza a la etiqueta HTML a
import './navbar.css';

function Navbar(){

    return(

            <ul>
             <li><NavLink className={( {isActive} )=> isActive? "activeLink": "defaultLink"} to="/">Home</NavLink></li>
             <li><NavLink className={( {isActive} )=> isActive? "activeLink": "defaultLink"} to="/about">About</NavLink></li>
             <li><NavLink className={( {isActive} )=> isActive? "activeLink": "defaultLink"} to="/users">Users</NavLink></li>
            </ul>
        );
}

export {Navbar};