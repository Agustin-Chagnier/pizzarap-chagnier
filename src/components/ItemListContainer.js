import { useState , useEffect } from "react";
import React from "react";
import "./ItemListContainer.css";
import ItemList from './ItemList';
import { useParams } from "react-router-dom"






const ItemListContainer = ({productos, nombre}) => {
    
    
    let [lista, setLista] = useState([])
    
    /* let {categoria} = useParams()  */
    console.log(productos)
    

        useEffect (()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
              }, 2000);
            });
            promesa.then((prods) => {
              setLista(prods);
            });
          }, []);



    
    
    return (

    
        
            
        <>  
        <p id="greeting">Hola {nombre}! </p>
        <ItemList productos={lista}/>
        
        </>
    )
}



export default ItemListContainer