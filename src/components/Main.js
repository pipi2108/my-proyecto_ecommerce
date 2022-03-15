import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/products" element={<ItemListContainer nombre="Caprichitos" año="2018" />}/>
                <Route path="/products/:id" element={<ItemDetailContainer/>}/>
                
            </Routes>
        </main>
        )
        
    }
    
    export default Main
    
    // <>
    // 
    // </>