import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { useState, useEffect, createContext } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Home from "./components/Home" 
import Carrito from "./components/Carrito"
import productos from "./components/jsons/productos.json"
import CustomProvider from "./components/cartContext.js"

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';








function App() {

    let [show, setShow] = useState(false)

    const links = [
        { href: "/pizzas", name: "pizzas", id: 1 },
        { href: "/combos", name: "combos", id: 2 },
        { href: "/especiales", name: "especiales", id: 3 }
    ]


    return ( 
        
        <CustomProvider>
            <BrowserRouter>
            <Navbar links={links}/>

            <Routes>
        
                <Route  path="/" element={<Home/>}/>
                <Route  path="/:categoria" element={<ItemListContainer productos={productos} nombre={"USUARIO"} />}/>
                <Route  path="/carrito" element={<Carrito/>}/>
                <Route  path="/producto/:id" element={<ItemDetailContainer productos={productos}/>}/>
                <Route path="*"/>
            
            </Routes>
        
            <Footer/>
            
            </BrowserRouter>
        </CustomProvider>


    
        
           

    
    );
}
    
export default App