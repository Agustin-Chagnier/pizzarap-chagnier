import React from "react";
import "./ItemList.css";
import Item from './Item';



const ItemList = ({productos}) => {




    return (
        <>
         
        {   productos.map((producto) =>{
            return <Item id={producto.id} producto={producto.producto} img={producto.img} precio={producto.precio}/>
        })
        }

        </>
            
        
    )
    
}









export default ItemList