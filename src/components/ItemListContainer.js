import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "./Firabase"
import ItemList from "./ItemList"
import { getDocs, collection , query , where } from "firebase/firestore"


const ItemListContainer = (props) =>{
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        if(!id){
            const productosColletion = collection(db, "products")
            const products = getDocs(productosColletion)
            
            products
            .then(respuesta=> setProductos(respuesta.docs.map(doc=>doc.data())))
            .catch((error)=>{
                console.log("error al cargar")
            })
            .finally(()=>setLoading(false))
        }else{
            const productosColletion = collection(db, "products")
            const filtrado = query(productosColletion, where("genero","==", id))
            const products = getDocs(filtrado)
            products
            .then(respuesta=> setProductos(respuesta.docs.map(doc=>doc.data())))
            .catch((error)=>{
                console.log("error al cargar")
            })
            .finally(()=>setLoading(false))
        }
          
    }, [id])

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
            </div>
        </>    
    )
}

export default ItemListContainer