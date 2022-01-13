import React from "react";
import { useContexto } from "./cartContext.js"
import {Link,NavLink} from "react-router-dom"




const CartWidget = () => {

const {cantidad_total} = useContexto()


if (cantidad_total !== 0){
    return (
        <NavLink to="/carrito">
            <span id="carrito" class="material-icons">
                shopping_cart
            </span>
            {cantidad_total}
        </NavLink>
)} else {

    return (<p></p>)


}

}
export default CartWidget

