import { useContext } from "react";
import {Context} from './CartContext';
import {NavLink } from "react-router-dom";
import Cart from "./Cart";
import CartCheckout from "./CartCheckout";


const Carrito = () => {
    const {carrito} = useContext(Context)
    
      
    return(
        <>
            <div id="cartContainer">
                { carrito.length === 0 ? (<div><NavLink to={"/products"} ><p className="seguirComprando">Seguir comprando</p></NavLink></div>) :
                    (<div>
                        <div>
                            {carrito.map((item, index)=>(
                        <Cart key={index} {...item}/>
                        ))}
                        </div>
                        <div className="containerLimpiar">
                            <CartCheckout carrito={carrito}/>
                        </div>
                    </div>)
                }
            </div>
        </>
    )
}
export default Carrito;