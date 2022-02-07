import React from "react";
import "./navbar.css";
import {NavLink} from "react-router-dom"

import CartWidget from "./CartWidget.js"




const Navbar = ({nombre,links}) => {


    


    return ( 
    <header id="navbar">
        <div id="brand">
            <NavLink to="/">
            <img id="logo" src="/logo_pizzarap.png" alt="logo" />
            <h1>{nombre}</h1>
            </NavLink>
        </div>
        <nav id="navbar__links">
            {links.map((elemento, indice) => {
                return <NavLink className="links" key={elemento.id} to={elemento.href}>{elemento.name}</NavLink>
            })}
        </nav>
        <CartWidget />
    </header>
        
        )
    }
                
                


    
    

export default Navbar