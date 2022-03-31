import { createContext, useEffect, useState } from "react";


export const Context = createContext()

const {Provider} = Context

const MiProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    useEffect (() => {
        setTotal(totalCarrito())
        totalPrecio(carrito)
    },[carrito])
   

    const addItem = (item, count) => {
        if(isInCart(item)) {
            setCarrito(carrito.map(p => p.item.id === item.id ? {...p, count : p.count + count} : p ) )
           
        }else{
            setCarrito((prevCarrito) => ([...prevCarrito, {item, count}]))
            
        }
        
    }
    const isInCart = item => carrito && carrito.some(p => p.item.id === item.id)

    const removeItem = (item) => {
        if(isInCart(item)){
            const productoEliminado = carrito.filter(p => p.item.id !== item.id) || []
            setCarrito([...productoEliminado]) 
        }
    }

    const clear = () => {
        setCarrito([])
    }
    
    const totalCarrito = ()=> {
        const initialValue = 0
        return carrito && carrito.reduce((previusValue, currentValue)=> previusValue + currentValue.count, initialValue)
    }

    const totalPrecio = (carrito) => {
        let precioTotal = 0
        carrito.forEach(p => {
            precioTotal += p.item.precio * p.count   
        });
        setPrecioTotal(precioTotal)
    }

    const valorGeneral  = {
        carrito : carrito,
        addItem : addItem,
        isInCart : isInCart,
        removeItem : removeItem,
        clear : clear,
        total : total,
        precioTotal : precioTotal
    }

    return (
        <Provider value={valorGeneral}>
            {children}
        </Provider>
    )
}

export default MiProvider