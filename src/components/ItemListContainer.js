import { useState , useEffect } from "react";
import React from "react";
import "./ItemListContainer.css";
import ItemList from './ItemList';
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { getDocs, query, collection, where } from "firebase/firestore"










const ItemListContainer = ({ nombre }) => {

  let [lista, setLista] = useState([])
  const { categoria } = useParams()



  useEffect(() => {

      const productosCollection = collection(db, "productos")

     

      if (categoria) {

          const consulta = query(productosCollection,where("categoria","==",categoria))
          /* await */ getDocs(consulta)
              .then(({ docs }) => {
                  setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
              })
              .catch((error) => {
                  console.log(error)
              })

      } else {

          getDocs(productosCollection)
              .then(({ docs }) => {
                  setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
              })
              .catch((error) => {
                  console.log(error)
              })
      }

  }, [categoria])


     





    
    
    return (

    
        
            
        <>  
        <p id="greeting">Hola {nombre}! </p>
        <ItemList productos={lista}/>
        
        </>
    )
}



export default ItemListContainer