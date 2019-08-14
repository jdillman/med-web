import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import PageHeader from '../ui/PageHeader';
import NavDrawer from '../ui/NavDrawer';
import BreadcrumbToolbar from '../ui/BreadcrumbToolbar'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

export default function View({ title, children }) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleDrawer = () => setNavOpen(!navOpen);
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavDrawer onClose={toggleDrawer} open={navOpen} />
      <Grid className={classes.root} container direction="column">
        <Grid item ys={1}>
          <PageHeader toggleDrawer={toggleDrawer} />
        </Grid>
        <Grid item ys={11}>
          <Grid container direction="column">
            <Grid item ys={1}>
              <BreadcrumbToolbar title={title} />
            </Grid>
            <Grid item ys={11}>
              <Container className={classes.container} component="main">
                {children}
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
