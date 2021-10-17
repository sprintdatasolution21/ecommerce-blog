import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import { Link } from "react-router-dom";
import LinearProgress from 'material-ui/LinearProgress';
import CircularProgress from 'material-ui/CircularProgress';
import ProductsComponent from "./ProductsComponent";
import ProductsDetailsComponent from "./ProductsDetailsComponent";
import Grid from '@material-ui/core/Grid';




export default class ProductsDetailsContainer extends Component {
    render() {
        return (
            // <div style={{ width: 100 + '%' }} className="cl" >          
                <Grid container item xs={12} >                 
                    <Grid item xs={12} className="navMain">
                        <ProductsDetailsComponent />
                    </Grid>
                </Grid>
            // </div>
        )

    }

}
