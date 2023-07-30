import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Place from './Place/Place';
import useStyles from './styles';

const Places = ({ setCurrentId }) => {
  const { places, isLoading } = useSelector((state) => state.places);
  const classes = useStyles();

  if (!places.length && !isLoading) return 'No places';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {places?.map((place) => (
          <Grid key={place._id} item xs={12} sm={12} md={6} lg={3}>
            <Place place={place} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Places;
