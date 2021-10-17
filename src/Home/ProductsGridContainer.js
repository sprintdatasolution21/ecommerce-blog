import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import { Link } from "react-router-dom";
import LinearProgress from 'material-ui/LinearProgress';
import CircularProgress from 'material-ui/CircularProgress';
import ProductsComponent from "./ProductsComponent";
import HeaderComponent from "../shared/HeaderComponent";
import Grid from '@material-ui/core/Grid';




export default class ProductContainer extends Component {
    render() {
        return (
            <div style={{ width: 90 + '%' }} className="cl" >

                <Grid container item xs={12} >
                    <Grid item xs={12} className="navMain">
                        {/* <HeaderComponent />  */}
                    </Grid>
                </Grid>

                <Grid container item xs={12} >                 
                    <Grid item xs={12} className="navMain">
                        <ProductsComponent />
                    </Grid>
                </Grid>
            </div>
        )

    }

}
