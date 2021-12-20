import { useState , useEffect } from "react";
import React from "react";
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = (prop) => {

    let [producto, setProducto] = useState(null)

    const getItem = () =>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(prop)
            },3000)
        })

        promesa
        .then((prop)=>{
            console.log(prop)
            console.log("RESPUESTA THEN")
            setProducto(prop)
        })

    }
        
   





    return (
        <div>
            <button onClick={getItem}>AGREGAR AL DETALLE</button>
            <ItemDetail producto={producto}/>
        </div>

    )
}

export default ItemDetailContainer