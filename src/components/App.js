import NavBar from "../components/NavBar"
import Main from "./Main"
import MiProvider from "./CartContext";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar/>
                <Main/>
            </BrowserRouter>
        </MiProvider>
        )
}

export default App