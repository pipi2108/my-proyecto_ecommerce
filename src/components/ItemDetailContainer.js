import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})  
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
      },2000)
    }, [id])
    
    return (
        <>
          {item ? <ItemDetail {...item}/> : "Cargando"}
        </>
    )
    
}

export default ItemDetailContainer