import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';




export default function ProductsGridComponent() {

  return (
    <div>
      <Grid container >
      <Grid item xs={1}  />     
        <Grid item xs={12} sm={10}>
          <Grid container  spacing={2}>
            {[0, 1, 2, 4, 5, 6, 7, 8].map((value) => (
              <Grid  xs={12} sm={3} lg={2} key={value} item>
                <div class="module">
                  <div class="wishlist"/>              
                  <header>
                    <Grid container className="product-tiles">
                      <Grid item xs={4} className="product-tiles-title">
                        Fossile
                      </Grid>
                      <Grid item xs={4} className="product-tiles-price">
                         Men
                      </Grid>
                      <Grid item xs={4} className="product-tiles-price">
                      $10
                      </Grid>
                    </Grid>
                  </header>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={1}  />
      </Grid>

      <Grid container className="" >
        <Grid item xs={8} />  
        <Grid item xs={4}  justifyContent="right" >
          <Pagination count={10} variant="outlined" />
        </Grid>
        <Grid item xs={1} sm={1}/>  
      </Grid>
    </div>
  );
}
