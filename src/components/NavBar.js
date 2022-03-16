import Carrito from "./CartWidget"
import {NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header id="my-header">
            <div>
                <h2> Caprichitos </h2>
            </div>
            <div>
                <NavLink to="/products">PRODUCTOS</NavLink>
                <NavLink to="/products">NENE</NavLink>
                <NavLink to="/products">NENA</NavLink>
                <NavLink to="/products">BEBÉ</NavLink>
                
            </div>
            <div id='shop-basket'>
                <Carrito/>
            </div>
        </header>
        )
}

export default NavBar