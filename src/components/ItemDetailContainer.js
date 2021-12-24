import { useState , useEffect } from "react";
import React from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import productos from "./jsons/productos.json"


const ItemDetailContainer = () => {

    let {id} = useParams()
    let [seleccion, setSeleccion] = useState({}); 
    


    const getItem = () =>{

        const promesa = new Promise((res,rej)=>{
            
            setTimeout(()=>{
                let producto = productos.filter((prod) => prod.id == id)
                res(producto);
            },3000);
        });

        promesa
        .then((prod)=>{
            setSeleccion(prod)
        })

    }
        
    useEffect(() => getItem(),[])



    return (
        <div>
            <ItemDetail producto={seleccion}/>
        </div>
    )
}

export default ItemDetailContainer




