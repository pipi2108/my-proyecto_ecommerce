import {NavLink } from "react-router-dom";
import { FaShoppingBasket } from 'react-icons/fa';


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
                <NavLink to="/carrito"> <FaShoppingBasket/> </NavLink>
            </div>
        </header>
        )
}

export default NavBar