import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( 
    <>
        <Navbar />
        <ItemListContainer nombre={"USUARIO"} />
        <ItemDetailContainer />
    </>
    );
}

export default App