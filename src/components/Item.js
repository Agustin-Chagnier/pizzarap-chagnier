import { useState , useEffect } from "react";
import React from "react";
import "./item.css";
import ItemDetailContainer from "./ItemDetailContainer";



const Item = (props) => {

  
    
    return (
        <>
        <div id="item__box">
        <h4>{props.id}</h4>
        <h3>{props.producto}</h3>
        <img src={props.img}></img>
        <ItemDetailContainer key={props[props.id]} />
        
        
        </div>
       </>
    )

}


export default Item 