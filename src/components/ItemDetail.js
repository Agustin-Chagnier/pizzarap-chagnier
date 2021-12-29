import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount"


const ItemDetail = ({producto}) => {

    let [cantidad, setCantidad] = useState("")
    let [mostrar, setMostrar] = useState(false)
    const onAdd = ( ) => {
        
        console.log("cantidad de unidades " + cantidad)
    }



    if (mostrar === false){
    return (
        <div>
            <h1>Detalle</h1>
            <p>${producto.producto}</p>
            <p>${producto.precio}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} setCantidad={setCantidad} setMostrar={setMostrar} />
        </div>
        )

    } else {
        return (
            <div>
                <h1>Detalle</h1>
                <p>${producto.producto}</p>
                <p>${producto.precio}</p>
                <h2>Tu producto ha sido ingresado. Ingresaste {cantidad} unidades </h2>
            </div>
            )
    }
}

export default ItemDetail