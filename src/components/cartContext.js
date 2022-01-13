import { useState, createContext , useContext } from "react";

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

    const limpiarCarrito = () => {setCarrito([])}

    const isInCarrito = (id) => {
       return carrito.find(producto => producto.id === id)
    }


    const valorDelContexto = {
        cantidad_total,
        carrito,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito,
        precio_total

    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider   