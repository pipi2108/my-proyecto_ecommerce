import {Box, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';

const Footer = () => {
  return (
    <Box id="footer">
      <Box sx={{my: 3, mx: 2}}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Box sx={{textAlign: "center", textDecoration: "underline"}}>
            <Typography variant="h6">
              Contactenos
            </Typography>
          </Box>
          <Box sx={{textAlign: "center"}}> 
            <Typography >
              <WhatsAppIcon/> (03468)-15******
            </Typography>
            <Typography>
              <HomeIcon/> General Paz 766, Alejo Ledesma - Cba
            </Typography>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem>
        </Divider>
        <Grid item xs>
          <Box sx={{textAlign:"center"}}>
            <img src="/assets/logo-caprichitos.png" alt="Caprichitos Logo" width={180}/>
          </Box>
        </Grid>
      </Grid>
      </Box>
      <Box sx={{textAlign:"center"}} className="copyrigth">
        Copyrigth Gaston Lucero - 2022
      </Box>
    </Box>
  )
}

export default Footer
