import { createContext, useState } from "react";

export const Context = createContext()

const {Provider} = Context

const MiProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const addItem = (item, count) => {
        let carritoProductos = {item, count}
        let carritoSecundario = []
        if(isInCart(item)) {
            carritoProductos = carrito.find(p => p.item.id === item.id)
            carritoProductos.count += count
            carritoSecundario = [carrito]
        }else{
            carritoSecundario = [carritoProductos, carrito]
        }
        setCarrito([carritoSecundario])
    }
    const isInCart = (item) => {
        carrito && carrito.some(product => product.item.id === item.id)
    }

    const removeItem = (item) => {
        if(isInCart(item)){
            const productoEliminado = carrito.filter(p => p.item.id !== item.id)
            setCarrito([productoEliminado]) 
        }
    }

    const clear = () => {
        setCarrito([])
    }

    const valorGeneral  = {
        carrito : carrito,
        addItem : addItem,
        isInCart : isInCart,
        removeItem : removeItem,
        clear : clear
    }

    return (
        <Provider value={valorGeneral}>
            {children}
        </Provider>
    )
}

export default MiProvider