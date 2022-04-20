import React, { useContext, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Grid,
  Divider,
  Button,
  Breadcrumbs
} from "@mui/material";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Context } from "./CartContext";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

const ItemDetail = (item) => {
  const { producto, marca, genero, imagen, stock, precio, categoria } = item;
  const [counter, setCounter] = useState(null);
  const { addItem } = useContext(Context);

  const onAdd = (count) => {
    setCounter(count);
    addItem(item, count);
  };
  return (
    <>
      <Box className="btnVolver">
        <Button onClick={() => { window.history.go(-1) }}>
          <ArrowCircleLeftOutlinedIcon sx={{color: "#9f6cb8"}}/> VOLVER
        </Button>
      </Box>
      <Box sx={{ paddingLeft: "10px" }}>
        <Breadcrumbs className="breadcrumb" separator="›" aria-label="breadcrumb">
          <Typography variant="h6">
            <Link underline="hover" color="inherit" to="/">
              Productos
            </Link>
          </Typography>
          <Typography variant="h6" color="text.primary">{producto}</Typography>
        </Breadcrumbs>
      </Box>
      <Card className="detalle" sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item>
            <Box sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={imagen}
                alt="imagen productos"
              />
            </Box>
          </Grid>
          <Grid item xs>
            <Box>
              <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography gutterBottom variant="h4">
                      {producto}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="h6">
                      {genero}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2">
                  Categoria: {categoria} Marca: {marca}
                </Typography>
              </Box>
              <Divider variant="middle" />
              <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography color="text.secondary" variant="body2">
                      Precio: ${precio}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="text.secondary" variant="body2">
                      Stock: {stock}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                {counter ? (
                  <Box className="btnConfirmar">
                    <Link className="btnCarrito" to={`/carrito`}>
                      <Button variant="contained">
                        Ir a Carrito
                      </Button>
                    </Link>
                  </Box>
                ) : (
                  <ItemCount stock={stock} inicial={1} onAdd={onAdd} />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ItemDetail;
