import NavBar from "../components/NavBar"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Main/>
        </BrowserRouter>)
}

export default App