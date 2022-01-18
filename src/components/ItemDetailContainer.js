import { useState, useEffect } from "react";
import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"


const ItemDetailContainer = () => {

  let { id } = useParams();

  let [seleccion, setSeleccion] = useState({});

  useEffect(() => {

    const productosCollection = collection(db, "productos")
    const refDoc = doc(productosCollection, id)
    getDoc(refDoc)
        .then((resultado) => {
            setSeleccion(resultado.data())
        })
        .catch((error) => {
          console.log(error)
        })
}, [id])


return (
    <div>
        <ItemDetail producto={seleccion} />
    </div>
)
}

export default ItemDetailContainer