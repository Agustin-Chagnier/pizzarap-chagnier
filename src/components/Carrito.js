import {Link,NavLink} from "react-router-dom"
import { useContexto } from "./cartContext.js"




const Carrito = () => {

    const {carrito,borrarDelCarrito,limpiarCarrito,precio_total} = useContexto()




    return (
        <div>
            Soy Carrito
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, indice) => {
                        return <li key={indice}>{producto.producto} - ${producto.precio} - {producto.cantidad} <button onClick={()=>borrarDelCarrito(producto.id,producto.cantidad,producto.precio)}>borrar</button></li>
                    })}
                    {precio_total}
                    <button onClick={limpiarCarrito}>LIMPIAR</button>
                    <button>TERMINAR COMPRA</button>
                </ul>
            ) : <p>No hay productos en el carrito<br/><Link to="/menu">Volver al menu</Link></p>}
        </div>
            
    )
}

export default Carrito
                    
                    
