import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Espresso', description: 'Espresso shots', price: '$3', image: 'https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_topcrop_630'},
  { id: 2, name: 'Latte', description: 'Espresso shots with steamed milk', price: '$4', image: 'https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_topcrop_630'},
  { id: 3, name: 'Flat White', description: 'Ristretto Espresso shots with steamed milk', price: '$5', image: 'https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg?impolicy=1by1_wide_topcrop_630' },
  { id: 4, name: 'Caramel Macchiato', description: 'Espresso shots with steamed milk and vanilla syrup', price: '$5', image: 'https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_topcrop_630' },
  { id: 5, name: 'Cappucino', description: 'Thick foam layer with espresso shots and a small amount of steamed milk', price: '$4', image: 'https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_topcrop_630'},
]

const Products = () => {
  return (
    <main>
    <Grid container justify='center' spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product}/>
        </Grid>
      ))}
    </Grid>
  </main>
  )
}

export default Products;