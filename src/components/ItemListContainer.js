import { useState , useEffect } from "react";
import React from "react";
import "./ItemListContainer.css";
import ItemList from './ItemList';






const ItemListContainer = (prop) => {
    
    
    
    const productos = [
       {
           "id": 1,
           "producto":"Muzzarella",
           "img":"/muzzarella.png",
           "precio": 400
       },
       {
           "id": 2,
           "producto":"Napolitana",
           "img":"/napolitana.jpg",
           "precio": 450
       },
       {
           "id": 3,
           "producto":"Fugazzeta",
           "img":"/fugazzeta.jpeg",
           "precio": 500
       }
    ]
    


    let [lista, setLista] = useState([])

    useEffect (()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },3000)
        })

        promesa
        .then((productos)=>{
            console.log(productos)
            console.log("RESPUESTA THEN")
            setLista(productos)
        })
        
    },[])



        return (

    
        
            
        <>  
        <p id="greeting">Hola {prop.nombre}! </p>
        <ItemList productos={lista}/>
        
        </>
    )
}



export default ItemListContainer