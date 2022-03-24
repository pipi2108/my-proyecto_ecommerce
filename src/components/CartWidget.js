import { useContext } from "react"
import {Context} from './CartContext'

function Carrito() {
    const resultado = useContext(Context)
    const carrito = resultado.carrito
    console.log(carrito)
    
    return(
        <div>   
            <p>MI CARRITO</p>    
        </div>
    )
}

export default Carrito