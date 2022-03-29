import React, {useContext} from 'react'
import { FaShoppingBasket } from 'react-icons/fa';
import {NavLink } from "react-router-dom";
import {Context} from './CartContext';

const CartWidget = () => {
  const {total} = useContext(Context)
  
  return (
    total !== 0 && (
      <div>
        <NavLink to="/carrito"> <FaShoppingBasket/></NavLink>
        <p>{total}</p>
      </div>
        )    
        
  )
}

export default CartWidget