import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import {Context} from './CartContext'


const ItemDetail = (item) => {
    const {id, product, marca, genero, src, stock, precio, categoria} = item
    const [counter, setCounter] = useState(null);
    const {addItem} = useContext(Context)
    
    const onAdd = (count) => {
        setCounter (count)
        addItem(item, count)
      }
  return (
    <div id="detalle">
    
        <div className="detallesProductos">
            <div className="productosDetalles">
                <img src={src} alt="" />
                <div className="descripcionProducto">
                    <h3> 
                    {product} : {id}
                    </h3>
                    <p>Precio: ${precio}</p>
                    <p>Marca: {marca}</p>
                    <p>{categoria}</p>
                    <p>{genero}</p>
                    <p>Stock: {stock}</p>
                    {counter ? <button> <Link to={`/carrito`}>Terminar compra</Link> </button> 
                    : <ItemCount stock={stock} inicial={1} onAdd={onAdd}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail