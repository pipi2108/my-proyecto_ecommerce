import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "./Firabase"
import ItemList from "./ItemList"
import { getDocs, collection , query , where } from "firebase/firestore"
import Box from '@mui/material/Box';


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
            <Box>
                <img src="assets/local-frente.jpeg" alt="frente-del-local" height= "100vh"/>
            </Box>
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