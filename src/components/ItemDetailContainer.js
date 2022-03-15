import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
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
  
    })
    
    return (
        <div id="detalle">
            <p>{loading ? "Cargando..." : "los productos se cargaron correctamente"}</p>
            <div className="detallesProductos">
              <h2>
                  {item.product}
              </h2>
              <div className="productosDetalles">
                <img src={item.src} alt="" />
                <div>
                    <p>Precio: ${item.precio}</p>
                    <p>{item.marca}</p>
                </div>
              </div>
            </div>

        </div>
    )
    
}

export default ItemDetailContainer