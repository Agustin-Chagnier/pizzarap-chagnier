import { useState , useEffect } from "react";
import React from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";



const ItemDetailContainer = (productos) => {
    
    let {id} = useParams()
    let [producto, setProducto] = useState({}); 
    
    
    
    const getItem = () =>{
        
        const promesa = new Promise((res,rej)=>{
            
            setTimeout(()=>{
                console.log("productos de prop" + productos)
                let producto = productos.filter((prod) => prod.id == id)
                console.log(producto)
                res(producto);
            },3000);
        },[]);

        promesa
        .then((producto)=>{
            setProducto(producto)
        })
        
    };
            
    
    useEffect(() => {
        console.log("soy efecto de IDC")
        getItem()},[])
    



    return (
        <div>
            {producto ? <ItemDetail producto={producto}/> :<></>}
            
        </div>
    )
}

export default ItemDetailContainer




