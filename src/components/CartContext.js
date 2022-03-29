import { createContext, useEffect, useState } from "react";


export const Context = createContext()

const {Provider} = Context

const MiProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    useEffect (() => {
        setTotal(totalCarrito())
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

    const valorGeneral  = {
        carrito : carrito,
        addItem : addItem,
        isInCart : isInCart,
        removeItem : removeItem,
        clear : clear,
        total : total
    }

    return (
        <Provider value={valorGeneral}>
            {children}
        </Provider>
    )
}

export default MiProvider