import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FolderIcon from '@material-ui/icons/Folder';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const AccountList = () => {
  const data = useSelector(({ entities: { accounts } }) =>
    accounts.allIds.map(id => accounts.byId[id])
  );

  const listItems = data.map(item => {
    return (
      <ListItem key={item.id} button component={Link} to={`/admin/accounts/${item.id}`}>
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

  return <List>{listItems}</List>;
};

export default AccountList;
