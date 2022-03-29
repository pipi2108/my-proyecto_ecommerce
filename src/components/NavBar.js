import {NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


function NavBar() {
    return (
        <header id="my-header">
            <div>
                <h2> Caprichitos </h2>
            </div>
            <div>
                <NavLink to="/products">PRODUCTOS</NavLink>
                <NavLink to="/products/Nene">NENE</NavLink>
                <NavLink to="/products/Nena">NENA</NavLink>
            </div>
            <div id='shop-basket'>
                <CartWidget/>
            </div>
        </header>
        )
}

export default NavBar