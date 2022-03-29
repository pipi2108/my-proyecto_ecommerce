import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./CartContainer"

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer nombre="Caprichitos" año="2018" />}/>
                <Route path="/products" element={<ItemListContainer nombre="Caprichitos" año="2018" />}/>
                <Route path="/products/:id" element={<ItemListContainer nombre="Caprichitos" año="2018" />}/>
                <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </main>
        )
        
    }
    
    export default Main
    
    // <>
    // 
    // </>