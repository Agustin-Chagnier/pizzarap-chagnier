import { useState, useEffect } from "react";
import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productos from "./jsons/productos.json";

const ItemDetailContainer = () => {
  let { id } = useParams();
  let [seleccion, setSeleccion] = useState({});

  const getItem = () => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos.find((prod) => prod.id === Number(id)));
      }, 3000);
    });

    promesa.then((prod) => {
      setSeleccion(prod);
    });
  };

  useEffect(() => getItem(), [id]);

  return (
    <div>
      <ItemDetail producto={seleccion} />
    </div>
  );
};

export default ItemDetailContainer;