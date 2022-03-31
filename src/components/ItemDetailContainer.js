import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { db } from "./Firabase"
import {  getDocs, collection, where, query } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})  
    const { id } = useParams()
  
    useEffect(() => {
      setTimeout(()=>{
        const productosColletion = collection(db, "products")
        const filtrado = query(productosColletion,where("id","==", Number(id)))
        const products = getDocs(filtrado)

        products
        .then(respuesta => setItem(respuesta.docs.map(doc=>doc.data())[0]))
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