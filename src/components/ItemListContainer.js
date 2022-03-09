import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const miOnAdd = () => {
    console.log ("Agregado a carrito")
}
let productosIniciales = [
    {
        id: 1 ,
        producto: "Jean",
        precio: 2500,
        descripcion: "Jean para niño, estilo chupin, con rodillas desgastadas."

    },
    {
        id: 2,
        producto: "Sweatter",
        precio:3500,
        descripcion:"Sweatter para niño, de lana, con puños bordados"

    },
    {
        id: 3,
        producto: "Remera",
        precio: 1500,
        descripcion: "remera para niño, mangas cortas y largas"

    },
    {
        id: 4,
        producto: "Vestido",
        precio:4500,
        descripcion: "Vestido para niña, largo de todo tipo de colores."

    }]

const ItemListContainer = (props) =>{
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(()=>{
 
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })
        promesa
        .then(()=>{
            setProductos(productosIniciales)
        })
        .catch(()=>{
            console.log("ERROR AL QUERER CARGAR PRODUCTOS")
        })
        .finally(()=>{
            setLoading(false)
        })
        
    })

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
                    {!loading && <ItemList items={productos}/>}
                </div>
                <ItemCount inicial={0} stock={5} onAdd={miOnAdd}/>
            </div>
        </>    
    )
}

export default ItemListContainer