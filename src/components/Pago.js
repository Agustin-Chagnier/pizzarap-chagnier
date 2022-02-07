import { useContexto } from "./cartContext.js"
import { useState } from "react";
import { addDoc, collection , serverTimestamp } from "firebase/firestore"
import { db } from "./firebase"
import Swal from "sweetalert2";
import "./pago.css";





const Pago = () => {

    const {carrito,limpiarCarrito,precio_total} = useContexto()
    
    const [cliente, setCliente] = useState({
        nombre: "",
        apellido: "",
        celular: "",
        direccion: "",
      });

      const clienteInfo = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
      };

      const enviarPedido = () => {
        const pedido = {
          cliente: cliente,
          items: { ...carrito },
          date: serverTimestamp(),
          total: precio_total,
        };
      

        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, pedido).then(({id}) => {
          Swal.fire({
            icon: "success",
            text: `Tu pedido (${id}) ya esta esta siendo realizado. Mantenga atencion a la confirmacion de la llegada a su domicilio a traves de su celular `,
            footer:'<a href="../index.html">Volver al Inicio</a>'
          });
        })
       
        setCliente({ nombre: "", apellido: "", celular: "", direccion: "" });
        limpiarCarrito()
      }

    return (
      <>
        <div id="pagoContainer">
          <h3 className="tituloPagoContainer">Ingrese sus datos:</h3>
          <form id="pagoFormulario">
            <input
              type="text"
              name="nombre"
              value={cliente.nombre}
              placeholder="Nombre"
              className="pagoInput"
              onChange={clienteInfo}
              required
            />
            <input
            type="text"
            name="apellido"
            value={cliente.apellido}
            placeholder="Apellido"
            className="pagoInput"
            onChange={clienteInfo}
            required
            />
            <input
            type="text"
            name="celular"
            value={cliente.celular}
            placeholder="Celular"
            className="pagoInput"
            onChange={clienteInfo}
            required
            />
            <input
            type="text"
            name="direccion"
            value={cliente.direccion}
            placeholder="Direccion"
            className="pagoInput"
            onChange={clienteInfo}
            required
            />
            <button
            type="submit"
            className="botonFinal"
            onClick={enviarPedido}
            disabled={
              !(
                cliente.nombre &&
                cliente.apellido &&
                cliente.celular &&
                cliente.direccion
              )
            }
          >
            Finalizar
          </button>
          </form>
        </div>
      
      
      
      
      </>



    )
}
        
export default Pago;