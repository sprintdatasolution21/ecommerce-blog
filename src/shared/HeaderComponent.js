import React from 'react';
import { Menu, MenuItem, Card, CardTitle, CardText } from 'material-ui';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';


const HeaderComponent = (props) => {
    return (

        <Grid container className="appheader" >
            <Grid item xs={false} sm={7} >
            </Grid>
            <Grid item xs={9} sm={3}>
                <Menu className="app-menu" >
                    <Link className="app-link" to={"/"} >
                        <MenuItem className="app-link" primaryText="Home" />
                    </Link>
                    <Link className="app-link" to={"Products"} >
                        <MenuItem className="app-link" primaryText="Products" />
                    </Link>
                    <Link className="app-link" to={"Product"} >
                        <MenuItem className="app-link" primaryText="Product" />
                    </Link>
                    <Link className="app-link" to={"Video"} >
                        <MenuItem className="app-link" primaryText="Sell" />
                    </Link>
                    <Link className="app-link" to={"Video"} >
                        <MenuItem className="app-link" primaryText="Views" />
                    </Link>
                </Menu>
            </Grid>
            <Grid item xs={2} sm={1} className="wish-list">
                SEE &nbsp; <br />  WISHLIST
            </Grid>

            <Grid item xs={1} sm={1} className="cart-widget" >
                <div className="cart-icon">
                </div>
                <div className="cart-count">
                    10
                </div>
            </Grid>
        </Grid>

    )
};
export default HeaderComponent;
