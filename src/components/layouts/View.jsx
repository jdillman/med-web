import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import HomeIcon from '@material-ui/icons/Home';
import LabelIcon from '@material-ui/icons/Label';

import Header from '../core/Header';
import NavDrawer from '../core/NavDrawer';

/* eslint-disable-next-line */
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function View({ title, children }) {

  const [navOpen, setNavOpen] = useState(false);
  const toggleDrawer = () => setNavOpen(!navOpen);
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavDrawer onClose={toggleDrawer} open={navOpen} />
      <Grid className={classes.root} container direction="column" component="main">
        <Grid item ys={1}>
          <Header toggleDrawer={toggleDrawer} />
        </Grid>
        <Grid item ys={11}>
          <Grid container direction="column">
            <Grid item ys={1}>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Breadcrumbs aria-label="Breadcrumb">
                    <Link color="inherit" href="/" className={classes.link}>
                      <HomeIcon className={classes.icon} />
                      Home
                    </Link>
                    <Link color="inherit" href="/" className={classes.link}>
                      <LabelIcon className={classes.icon} />
                      
                    </Link>
                    <Typography color="textPrimary">{title}</Typography>
                  </Breadcrumbs>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item ys={11}>
              <Paper>
                {children}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
