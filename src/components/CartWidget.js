import React, {useContext} from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Context} from './CartContext';

const CartWidget = () => {
  const {total} = useContext(Context)
  
  return (
    total !== 0 && (
      <Badge badgeContent={total} color="primary">
        <ShoppingCartIcon sx={{color:"black"}}/>
      </Badge>
      )        
  )
}

export default CartWidget