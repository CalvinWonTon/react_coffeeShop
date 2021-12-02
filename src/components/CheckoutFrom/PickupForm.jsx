import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, FormControl } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { commerce } from '../../lib/commerce';

import FormInput from './CustomTextField';

const PickupForm = ({ next }) => {
  const [store, setStore] = useState([])
  const methods = useForm();

  return (
    <>
      <Typography variant='h6' gutterBottom>Order</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({...data, store}))}>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First Name'/>
            <FormInput required name='lastName' label='Last Name'/>
            <FormInput gutterBottom required name='email' label='Email'/>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Store Location</InputLabel>
                <Select
                  labelId="store-location-number-label"
                  id="store-location-number"
                  value={store} 
                  label="Store Location"
                  fullWidth
                  onChange={(e) => setStore(e.target.value)}>
                    <MenuItem value={1}>CoffeeShop 1</MenuItem>
                    <MenuItem value={2}>CoffeeShop 2</MenuItem>
                    <MenuItem value={3}>CoffeeShop 3</MenuItem>
                    <MenuItem value={4}>CoffeeShop 4</MenuItem>
                    <MenuItem value={5}>CoffeeShop 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button component={Link} to='/cart' variant='outlined'>Back to Cart</Button>
            <Button type='submit' variant='contained' color='primary'>Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default PickupForm
