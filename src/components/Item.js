import React from "react";
import "./item.css";
import { Link } from "react-router-dom";



const Item = (props) => {

 
    return (
        <>
        <div id="item__box">
        <h3 id="item__titulo">{props.producto}</h3>
        <img id="item__img" src={props.img} alt="foto" />
        <h3 id="item__precio">${props.precio}</h3>
        <Link to={`/producto/${props.id}`} id="item__boton"><button id="item__boton--boton">VER DETALLE</button></Link>
        
        
        </div>
       </>
    )

}


export default Item 