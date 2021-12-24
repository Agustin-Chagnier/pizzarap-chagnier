import { useState , useEffect } from "react";
import React from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({productos}) => {

    let {id} = useParams()
    let [seleccion, setSeleccion] = useState({}); 

    console.log(productos)

    const getItem = () =>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos.find((prod) => prod.id === id));
            },3000);
        });

        promesa
        .then((prod)=>{
            setSeleccion(prod)
        })

    }
        
    useEffect(() => getItem(),[id])



    return (
        <div>
            <ItemDetail producto={seleccion}/>
        </div>
    )
}

export default ItemDetailContainer




