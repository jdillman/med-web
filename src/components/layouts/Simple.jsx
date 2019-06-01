import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from '../core/Header';
import NavDrawer from '../core/NavDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
}));

export default function View({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleDrawer = () => setNavOpen(!navOpen);
  const classes = useStyles();

  return (
    <Grid container direction="column" component="main" className={classes.root}>
      <Grid item ys={1}>
        <Header toggleDrawer={toggleDrawer} />
      </Grid>
      <Grid item ys={11}>
        <NavDrawer onClose={toggleDrawer} open={navOpen} />
        { children }
      </Grid>
    </Grid>
  );
}
