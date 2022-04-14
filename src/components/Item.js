import { Link } from "react-router-dom"
import * as React from 'react';
import {Card, CardContent, CardMedia, CardActionArea, Typography, Box } from '@mui/material';


const Item = ({producto}) => {
    return (
        <>
        <Card className="item" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <Link className="cardProd" to={`/product/${producto.id}`}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={producto.imagen}
                        alt="imagen productos"
                    />
                    <CardContent >
                        <Box sx={{height: 100}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {producto.producto}
                            </Typography>
                        </Box>
                        <Box sx={{height: 50}}>
                            <Typography variant="body2" color="text.secondary">
                                PRECIO: ${producto.precio}
                            </Typography>
                        </Box>
                    </CardContent>
                </Link>
            </CardActionArea>
            
        </Card>
        
        </>
    )
}

export default Item
