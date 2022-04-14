import CartWidget from "./CartWidget";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from "react-router-dom"


const pages = [{ name: "NENE", url: "/Nene" }, { name: "NENA", url: "/Nena" }];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar id="navbar" position="static">
            <Toolbar disableGutters className="nav">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to="/">
                            <img id="jgLogo" src="/assets/logo-caprichitos.png" alt="Caprichitos Logo" width={100}/>
                        </Link>
                    </Typography>

                    <Box justifyContent="flex-start" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menuAppbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem className="navItem" key={page.name} onClick={handleCloseNavMenu}>
                                    <NavLink className="navLink" to={page.url}>{page.name}</NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link to="/">
                            <img id="jgLogo" src="/assets/logo-caprichitos.png" alt="caprichitos Logo" width={100}/>
                        </Link>
                    </Typography>

                    <Box justifyContent="center" sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button id="navButton"
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                <NavLink to={ page.url}>{page.name}</NavLink>
                            </Button>
                        ))}
                    </Box>
                    <NavLink to="/carrito"><CartWidget/></NavLink>
                </Toolbar>
        </AppBar>
    );
};

export default NavBar;