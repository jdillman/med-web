import React from 'react';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AccountList from '../ui/AccountList';

import View from '../layouts/View';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 288,
  },
}));

const AdminView = ({ children }) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <View title="Admin">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <p>Admin - Go build something jonathan</p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper>
            <AccountList />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            { children }
          </Paper>
        </Grid>
      </Grid>
    </View>
  );    
};

export default AdminView;
