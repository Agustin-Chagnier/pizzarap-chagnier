import React from "react";
import "./ItemList.css";
import Item from './Item';



const ItemList = ({productos}) => {




    return (
        <div id="item__list">
         
        {   productos.map((producto) =>{
            return <Item id={producto.id} producto={producto.producto} img={producto.img} precio={producto.precio}/>
        })
        }

        </div>
            
        
    )
    
}









export default ItemList