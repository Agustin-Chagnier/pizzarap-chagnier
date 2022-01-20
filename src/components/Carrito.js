import {Link,NavLink} from "react-router-dom"
import { useContexto } from "./cartContext.js"
import { addDoc, collection , serverTimestamp , updateDoc } from "firebase/firestore"
import { db } from "./firebase"
/* import Formulario from "./Formulario" */




const Carrito = () => {

    const {carrito,borrarDelCarrito,limpiarCarrito,precio_total} = useContexto()

    const finalizarCompra = () => {

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            cliente : {
                nombre : "Agustin",
                apellido : "Chagnier",
                email : "agustin@mail.com"
            },
            items : carrito,
            fecha : serverTimestamp(),
            total: precio_total
        })
        .then((resultado)=>{
            console.log(resultado)
        })
        limpiarCarrito()
    }


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
                    <button onClick={finalizarCompra}>TERMINAR COMPRA</button>
                </ul>
            ) : <p>No hay productos en el carrito<br/><Link to="/menu">Volver al menu</Link></p>}
        </div>
            
    )
}

export default Carrito
                    
                    
