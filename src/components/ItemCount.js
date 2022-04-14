import * as React from 'react';
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, Typography, Grid, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const ItemCount = ({ stock, inicial, onAdd }) => {
  const [contador, setContador] = useState(inicial);
 
  const sumar = () => {
    setContador(contador + 1);  
  };
  const restar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };
  const confirmar = () => {
    onAdd(contador);
  };
  return (
    <>
      <Box>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Box>
              <Button onClick={restar} disabled={contador === 1}>
                <ArrowDropDownIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Typography color="text.secondary" variant="body2">
              {contador.toString()}
            </Typography>
          </Grid>
          <Grid item>
            <Box>
              <Button onClick={sumar} disabled={contador === stock}>
                <ArrowDropUpIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="btnConfirmar">
        <Button variant="contained" onClick={confirmar}>
          <ShoppingCartIcon /> Agregar a Carrito
        </Button>
      </Box>
    </>
  );
};

export default ItemCount;

/* <div id="contador">
            <div className="count">
                <button onClick={restar}> - </button>
                <p>{contador.toString()}</p>
                <button onClick={sumar}> + </button>
            </div>
            <div className="btn-card">
                <button onClick={confirmar} className="boton">Agregar a carrito</button>
            </div>
        </div> */
