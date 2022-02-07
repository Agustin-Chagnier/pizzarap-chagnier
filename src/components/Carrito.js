import {Link,NavLink} from "react-router-dom"
import { useContexto } from "./cartContext.js"
import "./carrito.css";





const Carrito = () => {

    const {carrito,borrarDelCarrito,limpiarCarrito,precio_total, borrarUnoDelCarrito} = useContexto()
    
    return (
        <div  id="carrito__lista">
            Soy Carrito
            {carrito.length > 0 ? (
                <ul id="carrito__lista--items">
                    {carrito.map((producto, indice) => {
                        return <li key={indice} id="carrito__item">{producto.producto} - ${producto.precio} - {producto.cantidad}u <button onClick={()=>borrarDelCarrito(producto.id,producto.cantidad,producto.precio)}>borrar</button><button onClick={()=>borrarUnoDelCarrito(producto.id,producto.cantidad,producto.precio)}>Borrar solo 1</button></li>
                    })}
                    total ${precio_total}
                    <button onClick={limpiarCarrito}>LIMPIAR</button>
                    <NavLink to={"/Pago"}>
                    <button id="carritoTerminar">TERMINAR COMPRA</button>
                    </NavLink>
                </ul>
            ) : <p id="carrito__vacio">No hay productos en el carrito<br/><Link to="/">Volver al inicio</Link></p>}
        </div>
            
    )
}

export default Carrito
                    
                    
