import React from "react";
import "./ItemList.css";
import Item from './Item';



const ItemList = props => {




    return (
        <>
         
        {   props.productos.map((producto) =>(
            <Item
            id={producto.id}
            producto={producto.producto}
            img={producto.img}  
            />
            ))
        }

        </>
            
        
    )
    
}









export default ItemList