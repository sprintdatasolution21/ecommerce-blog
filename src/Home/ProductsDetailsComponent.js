import React from "react";
import { Card, CardText } from "material-ui/Card";
import Grid from "@material-ui/core/Grid";
import BreadCrumbComponent from "./BreadCrumbComponent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ProductReviewComponent from "./ProductReviewComponent";
import Divider from "@material-ui/core/Divider";

const ProductsDetailsComponent = () => {
  return (
    <div>
      <Grid container className="product-table">
        <Grid item xs={6}>
          <Card></Card>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid className="product-bread" item xs={6}>
              <BreadCrumbComponent />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>

          <Grid container className="product-title">
            <Grid item xs={1}>
              WATCH
            </Grid>
            <Grid item xs={6}>
              <Divider className="appProductDivider" />
            </Grid>
          </Grid>
          <Grid container className="product-price">
            <Grid item xs={1} className="product-old-price">
              $55
            </Grid>
            <Grid item xs={1} className="product-new-price">
              $45
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={2} className="product-category-title">
              Category:
            </Grid>
            <Grid item xs={1} className="product-category-value">
              Luxory
            </Grid>
          </Grid>
          <Grid container spacing={5} className="product-description">
            <Grid item xs={12}>
              Fluid grids use columns that scale and resize content.
              <br />
              A fluid grid’s layout can use breakpoints to determine if the
              layout needs to change dramatically.
              <br />
              <br />
              A fluid grid’s layout can use breakpoints to determine if the
              layout needs to
              <br />A fluid grid’s layout can use breakpoints to determine if
              the layout needs to
            </Grid>
          </Grid>
          <Grid container className="product-cart-widget">
            <Grid item xs={1}>
              <TextField
                className="product-add-cart-input"
                id="standard-number"
                label="Quantity"
                type="number"
                variant="outlined"
                defaultValue="1"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Divider
              orientation="vertical"
              className="product-title-div"
              flexItem
            />
            <Grid item xs={1}>
              <Button
                className="product-add-cart-btn"
                variant="outlined"
                color="primary"
              >
                ADD
              </Button>
            </Grid>
          </Grid>
          <Grid container className="product-ratings">
            <Grid item xs={2} className="product-ratings-text">
              Ratings
            </Grid>
            <Grid item className="product-ratings-divider" xs={6}>
              <ProductReviewComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="product-table">
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={2}>
              Similar Products
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Divider/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};
export default ProductsDetailsComponent;
