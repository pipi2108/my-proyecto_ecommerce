import NavBar from "../components/NavBar"
import Main from "./Main"
import Footer from "./Footer";
import MiProvider from "./CartContext";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </MiProvider>
        )
}

export default App