import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import List from '../core/List';
import View from '../layouts/View';
import { entities } from '../../lib/entityService';

/* eslint-disable-next-line */
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const AccountList = () => {
  const data = useSelector(({ entities: { accounts }}) => accounts.allIds.map(id => accounts.byId[id]));
  
  const dispatch = useDispatch();
  dispatch(entities.accounts.get);

  return data.map(item => {
    return (
      <p key={item.id}>
        <Link to={`/admin/account/${item.id}`}>{item.name}</Link>
      </p>
    );
  })
};

const AdminView = ({ accounts = [], children }) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <View title="Admin">
      <Container>
        <Grid container spacing={2}>
          {/* TOP */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <p>Admin - Go build something jonathan</p>
              <List items={accounts} />
            </Paper>
          </Grid>
          {/* MID */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <AccountList />
            </Paper>
          </Grid>
          {/* BOTTOm */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              { children }
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </View>
  );    
};

export default AdminView;
