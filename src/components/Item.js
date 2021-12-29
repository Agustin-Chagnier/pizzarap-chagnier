import { useState , useEffect } from "react";
import React from "react";
import "./item.css";
import { Link } from "react-router-dom";



const Item = (props) => {

  
    
    return (
        <>
        <div id="item__box">
        <h4>{props.id}</h4>
        <h3>{props.producto}</h3>
        <img src={props.img} alt="foto" />
        <h3>${props.precio}</h3>
        <Link to={`/producto/${props.id}`}><button>VER DETALLE</button></Link>
        
        
        </div>
       </>
    )

}


export default Item 