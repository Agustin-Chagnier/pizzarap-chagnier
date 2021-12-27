import React from "react";
import ItemCount from "./ItemCount"


const ItemDetail = (producto) => {

    console.log(producto.producto)
    let seleccion = producto.producto[0]
    console.log("seleccion " + seleccion)
    const onAdd = (cantidad) => {
        
        console.log("cantidad de unidades " + cantidad)
    }


    return (
        {/* <div>
            <h1>Detalle</h1>
            <p>${seleccion.nombre}</p>
            <p>${seleccion.precio}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div> */}
    )


}

export default ItemDetail