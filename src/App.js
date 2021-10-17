import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProductsDetailsContainer from "./Home/ProductsDetailsContainer";
import ProductsContainer from "./Home/ProductsContainer";
import HeaderComponent from "./shared/HeaderComponent";
import { CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



class App extends Component {
  render() {
    return (

      <div className="App">
        <Router>

          <MuiThemeProvider>
          
              <Grid container item xs={12} >
                <Grid item xs={12} className="navMain">
                  <HeaderComponent />
                </Grid>
              </Grid>
              <CssBaseline />
              <Route exact path="/" component={ProductsDetailsContainer} />
              <Route exact path="/Product" component={ProductsDetailsContainer} />
              <Route exact path="/Products" component={ProductsContainer} />
         
          </MuiThemeProvider>

        </Router>
      </div>

    );
  }
}



export default App;




