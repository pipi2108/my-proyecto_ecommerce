import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import validator from "validator"
import { Context } from './CartContext'
import { db } from './Firabase'
import TextField from '@mui/material/TextField'

const CartCheckout = () => {
    const {carrito,clear, precioTotal} = useContext(Context)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [validName, setValidName] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validPhone, setValidPhone] = useState(false)

    const handleClick = () =>{
        const orden = {
            buyer:{
                name,
                email,
                phone
            },
            items: carrito,
            date: serverTimestamp(),
            total: precioTotal
        }
        const ordenesColletion = collection(db, "ordenes")
        const pedido = addDoc(ordenesColletion,orden)

        pedido
        .then(respuesta => {
            const ordenId = respuesta.id
            console.log(ordenId)
            clear()
        })
    }
    
    const handleNameChange = (event) =>{
        setName(event.target.value)
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const handlePhoneChange = (event) =>{
        setPhone(event.target.value)
    }

    useEffect(()=> {
        setValidName(validator.isAlpha(name, "es-ES", {ignore: ""}))
        setValidEmail(validator.isEmail(email))
        setValidPhone(validator.isNumeric(phone, "es-ES"))
    },[name, email, phone])

  return (
      <>
        <div>
            <h2>Completa tus datos para terminar la compra</h2>
        </div>
        <div>
        <TextField
            id="outlined-name"
            error={name !== "" && !validName}
            label="Nombre completo"
            value={name}
            onChange={handleNameChange}
        />
        <TextField
            id="outlined-name"
            error={email !== "" && !validEmail}
            label="Email"
            value={email}
            onChange={handleEmailChange}
        />
        <TextField
            id="outlined-name"
            error={phone !== "" && !validPhone}
            label="Celular"
            value={phone}
            onChange={handlePhoneChange}
        />
        </div>
        <div>
            <p>Precio total: ${precioTotal}</p>
        </div>
        <div>
            <button onClick={()=> clear()}>Limpiar carrito</button>
            <button onClick={()=> handleClick()}>Confirmar compra</button>
        </div>
      </>
  )
}

export default CartCheckout