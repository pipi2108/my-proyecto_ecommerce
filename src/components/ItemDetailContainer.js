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
          .then(({respuesta}) => {
            // return respuesta.json()
            console.log(respuesta.json())
          })
          .then((producto) => {
            // setItem(producto)
          })
          .catch(() => {
            console.log("Hubo un error!")
          })
          .finally(() => {
            setLoading(false)
          })
      },2000)
  
    })
    
    return (
        <div id="detalle">
            <p>{loading ? "Cargando..." : "los productos se cargaron correctamente"}</p>
          <h2>
              {item.producto}
    
          </h2>
        </div>
    )
    
}

export default ItemDetailContainer