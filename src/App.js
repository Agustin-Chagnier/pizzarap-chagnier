import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( 
    <>
        <Navbar />
        <ItemListContainer nombre={prompt("Introduzca su nombre")} />
    </>
    );
}

export default App