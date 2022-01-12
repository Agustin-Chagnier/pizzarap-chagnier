import { useState, createContext , useContext } from "react";

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {

    return useContext(contexto)
}
    

const CustomProvider = ({children}) => {

    const [cantidad_total,setCantidadTotal] = useState(0)
   
    const [carrito,setCarrito] = useState([])

    const agregarAlCarrito = (producto,cantidad) => {
        
        const productoDuplicado = isInCarrito(producto.id)

        if(productoDuplicado != undefined){           
            productoDuplicado.cantidad++
            setCantidadTotal(carrito.length)
        }else{            

            const productoCantidad = {...producto, cantidad} 
            setCarrito([...carrito,productoCantidad]);
            setCantidadTotal(carrito.length)
        }                
    }

    const borrarDelCarrito = (id,cantidad) => {
       /*  var carritoCopia = carrito.filter(e=>(e.id)!==id)
        console.log(carritoCopia)
        setCarrito(carritoCopia)
        setCantidadTotal(cantidad_total - cantidad) 
        carritoCopia.splice(producto)
        console.log(carrito)*/
        
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
        limpiarCarrito

    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider   