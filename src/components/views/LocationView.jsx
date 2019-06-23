import React from 'react';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';

import { entities } from '../../lib/entityService';
import { useRouter } from '../../lib/context';

import View from '../layouts/View';
import Form from '../core/Form';

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
}));

export default function LocationView() {
  const classes = useStyles();

  const dispatch = useDispatch();
  dispatch(entities.accounts.get);

  const {
    location: { pathname = '' },
  } = useRouter();

  return (
    <View>
      <Paper classes={classes.root}>
        <Form schema={schema} data={account} />
      </Paper>
    </View>
  );
}
  
