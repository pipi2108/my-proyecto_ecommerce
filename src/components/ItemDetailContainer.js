import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState(null);
    const { id } = useParams()
  
    useEffect(() => {
      setTimeout(()=>{
        const pedido = fetch(`https://www.mockachino.com/d75ae74f-ab5f-4b/products/${id}`)
        
        pedido
          .then((respuesta) => {
              return respuesta.json()
            
          })
          .then((producto) => {
            setItem(producto)
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            setLoading(false)
          })
      },2000)
    }, [id])
    
    const onAdd = (count) => {
      setCounter (count)
    }
    return (
        <div id="detalle">
            <p>{loading ? "Cargando..." : "los productos se cargaron correctamente"}</p>
            <div className="detallesProductos">
              <div className="productosDetalles">
                <img src={item.src} alt="" />
                <div className="descripcionProducto">
                    <h3> 
                      {item.product}
                    </h3>
                    <p>Precio: ${item.precio}</p>
                    <p>Marca: {item.marca}</p>
                    <p>{item.genero}</p>
                    <p>Stock: {item.stock}</p>
                    {counter ? <button> <Link to={`/cart`}>Ir a carrito</Link> </button> 
                      : <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>}
                </div>
              </div>
            </div>
        </div>
    )
    
}

export default ItemDetailContainer