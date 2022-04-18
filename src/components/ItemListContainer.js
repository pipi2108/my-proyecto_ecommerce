import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { db } from "./Firabase"
import ItemList from "./ItemList"
import { getDocs, collection, query, where } from "firebase/firestore"
import { Box, Breadcrumbs, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        if (!id) {
            const productosColletion = collection(db, "products")
            const products = getDocs(productosColletion)

            products
                .then(respuesta => setProductos(respuesta.docs.map(doc => doc.data())))
                .catch((error) => {
                    console.log("error al cargar")
                })
                .finally(() => setLoading(false))
        } else {
            const productosColletion = collection(db, "products")
            const filtrado = query(productosColletion, where("genero", "==", id))
            const products = getDocs(filtrado)
            products
                .then(respuesta => setProductos(respuesta.docs.map(doc => doc.data())))
                .catch((error) => {
                    console.log("error al cargar")
                })
                .finally(() => setLoading(false))
        }

    }, [id])

    return (
        <>
            <Box>
                <Carousel showThumbs={false}>
                    <div>
                        <img src="assets/local-frente.jpeg" />
                    </div>
                    <div>
                        <img src="assets/local-frente.jpeg" />
                    </div>
                    <div>
                        <img src="assets/local-frente.jpeg" />
                    </div>
                </Carousel>
            </Box>
            <Box sx={{paddingLeft:"10px"}}>
                <Breadcrumbs className="breadcrumb" separator="›" aria-label="breadcrumb">
                    {id && <Link underline="hover" color="inherit" to="/">
                        Productos
                    </Link>}
                    <Typography color="text.primary">{id ? id : "Productos"}</Typography>
                </Breadcrumbs>
            </Box>
            <Box>
                {loading ? <CircularProgress /> : <ItemList items={productos} />}
            </Box>

        </>
    )
}

export default ItemListContainer