import { useContext } from "react";
import {Context} from './CartContext';
import {NavLink } from "react-router-dom";
import Cart from "./Cart";

const Carrito = () => {
    const {carrito} = useContext(Context)
      
    return(
        <div id="cartContainer">
            {
                carrito.length === 0 ? (<NavLink to={"/products"} ><p className="seguirComprando">Seguir comprando</p></NavLink>) :
                (carrito.map((item, index)=>(
                    <Cart key={index} {...item}/>
                )))
            }
        </div>
    )
        }
export default Carrito;