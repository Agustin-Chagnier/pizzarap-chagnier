import React from "react";
import "./item.css";
import ItemCount from './ItemCount';

const Item = (props) => {


    const onAdd = (cantidad) => {
        
        console.log("cantidad de unidades " + cantidad)
    }

    return (
        <>
        <h4>id:{props.id}</h4>
        <h3>Producto:{props.producto}</h3>
        <ItemCount stock="5" initial="1" onAdd={onAdd} />
       </>
    )

}


export default Item