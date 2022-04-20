import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Card, Grid, Button, TextField } from "@mui/material";
import validator from "validator";
import { Context } from "./CartContext";
import { db } from "./Firabase";


const CartCheckout = ({ setpedidoGenerado }) => {
    const { carrito, clear, precioTotal } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPhone, setValidPhone] = useState(false);


    const handleClick = () => {
        const orden = {
            buyer: {
                name,
                email,
                phone,
            },
            items: carrito,
            date: serverTimestamp(),
            total: precioTotal,
        };
        const ordenesColletion = collection(db, "ordenes");
        const pedido = addDoc(ordenesColletion, orden);

        pedido.then((respuesta) => {
            const ordenId = respuesta.id;
            console.log(ordenId);
            setpedidoGenerado(ordenId);
            clear()
        });
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    useEffect(() => {
        setValidName(validator.isAlpha(name, "es-ES", { ignore: "" }));
        setValidEmail(validator.isEmail(email));
        setValidPhone(validator.isNumeric(phone, "es-ES"));
    }, [name, email, phone]);

    return (
        <>
            <Box sx={{ my: 3, mx: 4 }}>
                <Card className="cardCheck" sx={{ my: 3, mx: 2, padding: "10px" }}>
                    <Box sx={{ my: 2, mx: 1, textAlign: "center" }}>
                        <Typography color="text.secondary" variant="h6">
                            Completa tus datos para efectuar la compra
                        </Typography>
                    </Box>
                    <Box component="form" sx={{ textAlign: "center" }}>
                        <Grid container rowSpacing={3} justifyContent="space-around">
                            <Grid item>
                                <TextField
                                    id="outlined-name"
                                    error={name !== "" && !validName}
                                    label="Nombre completo"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="outlined-name"
                                    error={email !== "" && !validEmail}
                                    label="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="outlined-name"
                                    error={phone !== "" && !validPhone}
                                    label="Celular"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ my: 2, mx: 1, textAlign: "center" }}>
                        <Typography color="text.secondary" variant="h5">
                            <span className="precioCheck">Precio total:</span> ${precioTotal}
                        </Typography>
                    </Box>
                    <Box>
                        <Grid container alignItems="center" justifyContent="space-around">
                            <Grid item>
                                <Button variant="contained" onClick={() => clear()}>Limpiar Carrito</Button>
                            </Grid>
                            <Grid item>
                                <Button disabled={!(validEmail && validName && validPhone)} variant="contained" onClick={() => handleClick()}>Confirmar Compra</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
            </Box>

        </>
    );
};

export default CartCheckout;


