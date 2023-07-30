import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector} from 'react-redux';

import useStyles from './styles';
import Csv from './Csv/Csv';
const Csvs = () => {

    const csvs = useSelector((state) => state.csvs);
    const classes = useStyles();

    // const { csvs, isLoading } = useSelector((state) => state.csvs);
    // console.log(csvs);
    // if (!csvs.length && !isLoading) {
    //     return 'No Csvs!';
    // }

    return (
        !csvs.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    csvs.map((csv) => (
                        <Grid key={csv._id} item xs={12} sm={6} md={6} lg={3}>
                            <Csv csv={csv} />
                        </Grid>
                    ))
                }
            </Grid>
        )
     );
}

export default Csvs;
