import { useState } from 'react';
import React from "react";
import "./itemcount.css";
import { Link } from "react-router-dom";





function ItemCount({stock, initial, onAdd, setCantidad, setMostrar}) {
    
    
    let [contador, setContador] = useState(initial)


    /*let [estado, setEstado] = useState(false)*/
    
    const sumar = () => {
        setContador(contador + 1)
        if(contador === stock){
            setContador(stock)     
        }
    }

    const restar = () => {
        setContador(contador - 1)
        if(contador === initial){
            setContador(initial)
        }
    }

    const agregarItem = (e) => {
        onAdd(contador)
        setCantidad(contador)
        e.target.disabled = true
        setMostrar(true)
    }



    
    return (
        <>
        <div id="fichaContador">       
        <div id="contadorProducto">
        <span class="material-icons" onClick={sumar}>add</span>
        <p>{contador}</p>
        <span class="material-icons" onClick={restar}>remove</span>
        
       <Link to={`/carrito`}><button onClick={agregarItem}>AGREGAR</button></Link>
        </div>
        </div>
        </>
    )
}

export default ItemCount 