import { useContext, useState } from "react";
import { Context } from './CartContext';
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import CartCheckout from "./CartCheckout";
import { Box, Button, Link, Breadcrumbs, Typography, Grid, Card } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import CheckIcon from '@mui/icons-material/Check';


const Carrito = () => {
    const { carrito } = useContext(Context)
    const [pedidoGenerado, setpedidoGenerado] = useState(null);

    return (
        <>
            {!pedidoGenerado ? <Box id="cartContainer">
                {carrito.length === 0 ?
                    (<Box className="btnSeguirComprando" sx={{ my: 3, mx: 2, textAlign: "center" }}>
                        <Button variant="contained">
                            <NavLink to={"/"}>Seguir comprando</NavLink>
                        </Button></Box>) :
                    (<Box>
                        <Box className="btnVolver">
                            <Button onClick={() => { window.history.go(-1) }}>
                                <ArrowCircleLeftOutlinedIcon /> VOLVER
                            </Button>
                        </Box>
                        <Box sx={{ paddingLeft: "10px" }}>
                            <Breadcrumbs className="breadcrumb" separator="›" aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" to={"/"}>
                                    Productos
                                </Link>
                                <Typography color="text.primary">Carrito</Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box>
                            {carrito.map((item, index) => (
                                <Cart key={index} {...item} />
                            ))}
                        </Box>
                        <Box className="containerLimpiar">
                            <CartCheckout carrito={carrito} setpedidoGenerado={setpedidoGenerado} />
                        </Box>
                    </Box>)
                }
            </Box> :
                <Box id="compraFinalizada" sx={{ my: 3, mx: 2 }}>
                    <Card >
                        <Box sx={{ my: 3, mx: 2, textAlign: "center" }}>
                            <Grid container justifyContent="center" alignItems="center" sx={{ gap: "5px" }}>
                                <Grid item>
                                    <CheckIcon color="success" />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        Muchas Gracias por su compra, en breve nos comunicaremos con usted!!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="orden">
                            <Typography variant="body2">
                                <span className="numero">Numero de compra:</span> {pedidoGenerado}
                            </Typography>
                        </Box>
                        <Box className="btnSeguirComprando" sx={{ my: 3, mx: 2, textAlign: "center" }}>
                            <Button variant="contained">
                                <NavLink to={"/"}>Volver al Inicio</NavLink>
                            </Button>
                        </Box>
                    </Card>
                </Box>}
        </>
    )
}
export default Carrito;