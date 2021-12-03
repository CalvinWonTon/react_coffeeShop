import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, AccountBox } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/shop.png';
import useStyles from './navbarStyles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
            <img src={logo} alt='CoffeeShop.js' height='25px' className={classes.image}/>
            CoffeeShop
          </Typography>
          <div className={classes.grow}/>
          {location.pathname === '/' &&(
          <div className={classes.button}>
            <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton component={Link} to='/profile' aria-label='User Login' color='inherit'>
              <AccountBox />
            </IconButton>
          </div>)}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
