import React from "react";
import "./ItemListContainer.css";
import ItemCount from './ItemCount.js';


const ItemListContainer = (prop) => {
   
    function onAdd(a) {
        
        console.log("agregaste " + a + " unidades al carrito")
    }

    return (
        <>  
        <p id="greeting">Hola {prop.nombre}! </p>
        <ItemCount stock="5" initial="1" onAdd={onAdd} />
        
        </>
    )
}

export default ItemListContainer