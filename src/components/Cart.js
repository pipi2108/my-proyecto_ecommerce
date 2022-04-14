import { Box, Typography, CardMedia, Grid, Divider, Card, Button } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "./CartContext";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = (product) => {
  const { item, count } = product;
  const { producto, imagen, precio } = item;
  const { removeItem } = useContext(Context);

  return (
    <>
      <Box sx={{ my: 3, mx: 2 }}>
        <Card sx={{ my: 3, mx: 2 }}>
          <Box>
            <Grid container alignItems="center" justifyContent="space-around">
              <Grid item>
                <Box sx={{ width: 100, backgroundColor: "white" }} />
              </Grid>
              <Grid item>
                <Typography
                  sx={{ width: 100, textAlign: "center" }}
                  color="text.secondary"
                  variant="body2"
                >
                  Producto
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ width: 100, textAlign: "center" }}
                  color="text.secondary"
                  variant="body2"
                >
                  Cantidad
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ width: 100, textAlign: "center" }}
                  color="text.secondary"
                  variant="body2"
                >
                  Precio x unid.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ width: 100, textAlign: "center" }}
                  color="text.secondary"
                  variant="body2"
                >
                  Total
                </Typography>
              </Grid>
              <Grid item>
                <Box sx={{ width: 100, backgroundColor: "white" }} />
              </Grid>
            </Grid>
          </Box>
          <Divider variant="middle" />
          <Box>
            <Grid
              container
              alignItems="center"
              justifyContent="space-around"
              sx={{ height: 100 }}
            >
              <Grid item>
                <Box sx={{ width: 100, maxWidth: 150 }}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={imagen}
                    alt="imagen productos"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ width: 100, textAlign: "center"  }}
                  color="text.secondary"
                  variant="body2"
                >
                  {producto}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ width: 100, textAlign: "center"  }}
                  color="text.secondary"
                  variant="body2"
                >
                  x{count} Unidades
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ width: 100, textAlign: "center"  }}
                  color="text.secondary"
                  variant="body2"
                >
                  ${precio}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ width: 100, textAlign: "center"  }}
                  color="text.secondary"
                  variant="body2"
                >
                  ${precio * count}
                </Typography>
              </Grid>
              <Grid item>
                <Box sx={{ width: 100 }}>
                    <Button onClick={() => removeItem(item)}>
                        <DeleteOutlineIcon/>
                    </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Cart;
