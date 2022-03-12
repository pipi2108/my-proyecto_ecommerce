import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const miOnAdd = () => {
    console.log ("Agregado a carrito")
}

const ItemListContainer = (props) =>{
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const pedido = fetch("https://www.mockachino.com/d75ae74f-ab5f-4b/products")
        
        pedido
            .then((respuestaDeLaApi) => {
                return respuestaDeLaApi.json()
            })

            .then((datos)=>{
                setProductos(datos.products)
            })
            .catch((errorDeMiApi)=>{
                console.log("ERROR AL QUERER CARGAR PRODUCTOS")
            })
            .finally(()=>{
                setLoading(false)
        })   
    },[id])

    return (
        <>
            <div id="sec-principal">
                <h2>Bienvenido a {props.nombre}!</h2>
                <p>{props.nombre}, se creo en {props.año} y es una tienda de ropa para niños/as 
                donde nuestra principal marca es Pandy y CO. </p>
            </div>
            <div>
                <div>
                    <p>{loading ? "Cargando..." : "los productos se cargaron correctamente"}</p>
                    <ItemList items={productos}/>
                </div>
                <ItemCount inicial={0} stock={5} onAdd={miOnAdd}/>
            </div>
        </>    
    )
}

export default ItemListContainer