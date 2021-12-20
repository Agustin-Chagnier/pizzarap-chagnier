import ItemCount from "./ItemCount"


const ItemDetail = (producto) => {


    
    const onAdd = (cantidad) => {
        
        console.log("cantidad de unidades " + cantidad)
    }


    return (
        <div>
            <h1>Detalle</h1>
            <p>{producto.nombre}</p>
            <p>${producto.precio}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )


}

export default ItemDetail