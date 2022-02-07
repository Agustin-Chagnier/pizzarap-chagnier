import { useState, createContext , useContext } from "react";
import Swal from "sweetalert2";

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {

    return useContext(contexto)
}
    

const CustomProvider = ({children}) => {

    const [precio_total, setPrecioTotal] = useState(0)

    const [cantidad_total,setCantidadTotal] = useState(0)
   
    const [carrito,setCarrito] = useState([])

    const agregarAlCarrito = (producto,cantidad) => {
        
        const productoDuplicado = isInCarrito(producto.id)
        
        if(productoDuplicado != undefined){           
            productoDuplicado.cantidad++
            
        }else{            
            
           
            const productoConCantidad = {...producto, cantidad} 
            setCarrito([...carrito,productoConCantidad]);
            setCantidadTotal(cantidad)
        }                
        setCantidadTotal(cantidad_total + cantidad)     
        setPrecioTotal(precio_total + producto.precio * cantidad)
    }
    
    const borrarDelCarrito = (id, cantidad, precio) => {
        
        const copia = carrito.filter(p => (p.id) !== id)
        setCarrito(copia)
        setCantidadTotal(cantidad_total - cantidad)
        setPrecioTotal(precio_total - (precio * cantidad))
    }

    const borrarUnoDelCarrito = (id, cantidad, precio) => {
        let productoDeMasUnidades = isInCarrito(id)
            
        if(cantidad > 1){           
            productoDeMasUnidades.cantidad--   
            setCantidadTotal(cantidad_total - 1)
            setPrecioTotal(precio_total - precio )
        }else{            
            Swal.fire({
                text: `La cantidad minima es 1u (uno)`,
              });
            
               
        }                
    }
            
        

    const limpiarCarrito = () => {
        setCarrito([]) 
        setCantidadTotal(0)}

    const isInCarrito = (id) => {
        
       return carrito.find(producto => producto.id === id)
    }


    const valorDelContexto = {
        cantidad_total,
        carrito,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito,
        precio_total,
        borrarUnoDelCarrito

    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider   