import { useState } from 'react';
import React from "react";
import "./itemcount.css";


function ItemCount({stock, initial, onAdd}) {
    
    
    let [contador, setContador] = useState(initial)


    /*let [estado, setEstado] = useState(false)*/
    
    const sumar = () => {
        setContador(contador + 1)
        if (contador >= stock) {
            contador(stock)
        }
    }

    const restar = () => {
        setContador(contador - 1)
        if (contador <= initial) {
            setContador(initial)
        }
    }



    
    return (
        <>
        <div id="fichaProducto">
        <h2>PRODUCTO</h2>
        <div id="contadorProducto">
        <span class="material-icons" onClick={sumar}>add</span>
        <p>{contador}</p>
        <span class="material-icons" onClick={restar}>remove</span>
        
        <button onClick={onAdd}>AGREGAR</button>
        </div>
        </div>
        </>
    )
}

export default ItemCount