import React from 'react';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import BreadCrumbComponent from "./BreadCrumbComponent"
import ProductsGridComponent from "./ProductsGridComponent"
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Divider from '@material-ui/core/Divider';





const ProductsComponent = () => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 230
        },
    }));
    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const handleSortChange = (event) => {
        setAge(event.target.value);
    };

    const [state, setState] = React.useState({
        categoryData: [
            { id: 0, checked: true, Name: "Man", Count: 10 },
            { id: 1, checked: true, Name: "Woman", Count: 15 },
            { id: 2, checked: true, Name: "All", Count: 25 }
        ],
        priceData: [
            { id: 0, checked: true, Name: "0-999", Count: 10 },
            { id: 1, checked: true, Name: "999-1999", Count: 15 },
            { id: 2, checked: true, Name: "1999- 2999", Count: 25 },
            { id: 3, checked: true, Name: "2999 > ", Count: 25 }
        ],
        brandData: [
            { id: 0, checked: true, Name: "Casio", Count: 10 },
            { id: 1, checked: true, Name: "Titan", Count: 15 },
            { id: 2, checked: true, Name: "Fossile", Count: 25 }
        ]
    });

    const handleChange = (event) => {
        var filterArray = state.categoryData;
        var objIndex = filterArray.findIndex((obj => obj.id == event.target.name));
        filterArray[objIndex].checked = event.target.checked
        setState({
            categoryData: filterArray
        })
    };

    return (


        <Grid container style={{ height: "500px" }}   >

            <Grid item xs={12} container className="productListDivider" >
                <Grid container item xs={4} >
                    <Grid item xs={1} />
                    <Grid item xs={11} className="breadOutline" >
                        <BreadCrumbComponent />
                    </Grid>
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={2} >

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleSortChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>


            <Grid item xs={2} >
                <Grid container >
                    <Grid item xs={2} />
                    <Grid item xs={7} className="filterHeading">
                        Categories -
                    </Grid>
                    <Grid item xs={3} />
                </Grid>

                <Grid container className="filterList" >
                    {state.categoryData.map((value) => (
                        <Grid container  >
                            <Grid item xs={2} />
                            <Grid item xs={7} className="filter-item">
                                <FormControlLabel
                                    control={<Checkbox checked={value.checked} onChange={handleChange} name={value.id} />}
                                    label={value.Name + " - " + value.Count}
                                />
                            </Grid>
                            <Grid item xs={3} />
                        </Grid>
                    ))
                    }
                </Grid>

                <Grid container >
                    <Grid item xs={2} />
                    <Grid item xs={7} className="filterHeading">
                        Price -
                    </Grid>
                    <Grid item xs={3} />
                </Grid>


                <Grid container className="filterList" >
                    {state.priceData.map((value) => (
                        <Grid container  >
                            <Grid item xs={2} />
                            <Grid item xs={7} className="filter-item">
                                <FormControlLabel
                                    control={<Checkbox checked={value.checked} onChange={handleChange} name={value.id} />}
                                    label={value.Name + " - " + value.Count}
                                />
                            </Grid>
                            <Grid item xs={3} />
                        </Grid>
                    ))
                    }
                </Grid>


                <Grid container >
                    <Grid item xs={2} />
                    <Grid item xs={7} className="filterHeading">
                        Ratings -
                    </Grid>
                    <Grid item xs={3} />
                </Grid>


                <Grid container className="filterList" >
                    {state.categoryData.map((value) => (
                        <Grid container  >
                            <Grid item xs={2} />
                            <Grid item xs={7} className="filter-item">
                                <FormControlLabel
                                    control={<Checkbox checked={value.checked} onChange={handleChange} name={value.id} />}
                                    label={value.Name + " - " + value.Count}
                                />
                            </Grid>
                            <Grid item xs={3} />
                        </Grid>
                    ))
                    }
                </Grid>


                <Grid container >
                    <Grid item xs={2} />
                    <Grid item xs={7} className="filterHeading">
                        Brands -
                    </Grid>
                    <Grid item xs={3} />
                </Grid>


                <Grid container className="filterList" >
                    {state.brandData.map((value) => (
                        <Grid container  >
                            <Grid item xs={2} />
                            <Grid item xs={7} className="filter-item">
                                <FormControlLabel
                                    control={<Checkbox checked={value.checked} onChange={handleChange} name={value.id} />}
                                    label={value.Name + " - " + value.Count}
                                />
                            </Grid>
                            <Grid item xs={3} />
                        </Grid>
                    ))
                    }
                </Grid>
            </Grid>

            <Grid item xs={10} className="productDetailDivision" >
                <ProductsGridComponent />
            </Grid>

            <Grid container className="SerchedProducts" >
                <Grid item xs={1} />
                <Grid item xs={10} >
                    <Grid container>
                        {/* <Grid item xs={1} /> */}
                        <Grid item xs={2} >
                            Serched Products
                        </Grid>
                        <Grid item xs={10} className="SearchedProductDivider" />
                    </Grid>
                </Grid>
                <Grid item xs={1} />
            </Grid>

            <Grid container className="SerchedProducts" >
            <Grid item xs={2} />
                <Grid item xs={8} >
                Serched | Products | Serched | Products| Serched | Products Serched | Products Serched | Products Serched | Products
                Serched | Products | Serched | Products| Serched | Products Serched | Products Serched | Products Serched | Products
                Serched | Products | Serched | Products| Serched | Products Serched | Products Serched | Products Serched | Products
   
                </Grid>
                <Grid item xs={2} />
                </Grid>
        </Grid >


    )
}
export default ProductsComponent;


