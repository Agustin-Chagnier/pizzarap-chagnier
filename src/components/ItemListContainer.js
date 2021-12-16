import { useState , useEffect } from "react";
import React from "react";
import "./ItemListContainer.css";
import ItemList from './ItemList';






const ItemListContainer = (prop) => {
    
    
    
    const productos = [
       {
           "id": 1,
       "producto":"Muzzarella"
       },
       {
           "id": 2,
           "producto":"Napolitana"
       },
       {
           "id": 3,
           "producto":"Fugazzeta"
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