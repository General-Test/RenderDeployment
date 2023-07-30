import React, { useEffect } from 'react'
import { Container, Grow, Grid }  from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getCsvs } from '../../actions/csvs';
import Csvs from '../Csvs/Csvs';
import Form from '../Form/Form';
import useStyles from './styles';

const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCsvs());
    }, [dispatch]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Csvs />
                    </Grid> 
                    <Grid item xs={12} sm={4} md={3}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
