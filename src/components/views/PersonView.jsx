import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from '../../lib/context';
import View from '../layouts/View';
import EntityForm from '../core/EntityForm';

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

  const {
    location: { pathname = '' },
  } = useRouter();

  console.log(pathname);

  return (
    <View>
      <Paper classes={classes.root}>
        <EntityForm />
      </Paper>
    </View>
  );
}
  
