import "./navbar.css";
import CartWidget from './CartWidget';

const Navbar = () => {
    return ( 
    <nav id="navbar">
    <div className="titulos">
    <h1 className="titulo">PizzaRap</h1>
    </div>
        <CartWidget />
    <div className="links">
        <a class="links" href="#">COMBOS</a>
        <a class="links" href="#">ESPECIALES</a>
        <a class="links" href="#">INFO</a>
    </div>
    </nav>

    )
}

export default Navbar