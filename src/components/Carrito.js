import { Link } from "react-router-dom"
import { useContexto } from "./cartContext.js"




const Carrito = () => {

    const {carrito,borrarDelCarrito,limpiarCarrito} = useContexto()




    return (
        <div>
            Soy Carrito
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, indice) => {
                        return <li key={indice}>{producto.producto} - ${producto.precio} - {producto.cantidad} <button onClick={()=>borrarDelCarrito(producto.id,producto.cantidad)}>borrar</button></li>
                    })}
                    <button onClick={limpiarCarrito}>LIMPIAR</button>
                </ul>
            ) : <p>No hay productos en el carrito</p>}
        </div>
            
    )
}

export default Carrito
                    
                    
