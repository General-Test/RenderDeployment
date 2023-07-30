import React from 'react'
import {  AppBar, Typography, Toolbar, Button }  from '@material-ui/core';
import { Link } from 'react-router-dom';

import csv from '../../images/csv.png';
import useStyles from './styles';

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2">CSV Uploader</Typography>
                <img className={classes.image} src={csv} alt="csv" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                <Button component={Link} to="/table" variant="contained" className={classes.tableButton} color="secondary">View Csv Data</Button>
            </Toolbar>
            
        </AppBar>
    )
}

export default Navbar
