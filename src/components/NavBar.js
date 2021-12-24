import React from "react";
import "./navbar.css";
import {Link,NavLink} from "react-router-dom"

const Navbar = ({nombre,links}) => {
    return ( 
    <header id="navbar">
        <div id="brand">
            <NavLink to="/">
            <img id="logo" src="/logo192.png" alt="logo" />
            <h1>{nombre}</h1>
            </NavLink>
        </div>
        <nav>
            {links.map((elemento, indice) => {
                return <NavLink className="links" key={elemento.id} to={elemento.href}>{elemento.name}</NavLink>
            })}
        </nav>
        <NavLink to="/carrito">
            <span id="carrito" class="material-icons">
                shopping_cart
            </span>
        </NavLink>
    </header>
        
                
                

    
    

    )
}

export default Navbar