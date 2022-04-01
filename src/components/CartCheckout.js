import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext } from 'react'
import { Context } from './CartContext'
import { db } from './Firabase'

const CartCheckout = () => {
    const {carrito,total} = useContext(Context)

    const handleClick = () =>{
        const orden = {
            buyer:{},
            items: carrito,
            date: serverTimestamp(),
            total: total
        }
        const ordenesColletion = collection(db, "ordenes")
        const pedido = addDoc(ordenesColletion,orden)

        pedido
        .then(respuesta => {
            const ordenId = respuesta.id
            console.log(ordenId)
        })
    }
    

  return (
      <>
        <div>CartCheckout</div>
      </>
  )
}

export default CartCheckout