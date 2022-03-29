import React, { useContext } from 'react'
import { Context } from './CartContext';

const Cart = (producto) => {
    const {item, count} = producto;
    const { product, src, precio} = item;
    const { removeItem} = useContext(Context)
  return (
        <>
           <div id='Cart'>
               <div className='cardProduct'>
                    <img src={src} alt="" width="20%" />
                    <p>{product} x {count}Unidades </p>
                    <p>${precio}</p>
                    <p>Total:${precio * count}</p>
                    <div className='btnQuitar'>
                        <button onClick={() => removeItem(item)}>Quitar</button>
                    </div>
               </div>
           </div>
           
        </>
    )
}

export default Cart