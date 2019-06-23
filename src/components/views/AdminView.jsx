import React from 'react';
import { useSelector } from 'react-redux'
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FolderIcon from '@material-ui/icons/Folder';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

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

const AccountList = () => {
  const data = useSelector(({ entities: { accounts }}) => accounts.allIds.map(id => accounts.byId[id]));
  
  // const dispatch = useDispatch();
  // dispatch(entities.accounts.get);

  const listItems = data.map(item => {
    return (
      <ListItem key={item.id} button component={Link} to={`/admin/account/${item.id}`}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="Edit">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <List>{listItems}</List>
  );
};

const AdminView = ({ accounts = [], children }) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <View title="Admin">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <p>Admin - Go build something jonathan</p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper>
              <AccountList accounts={accounts} />
            </Paper>
          </Grid>
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
