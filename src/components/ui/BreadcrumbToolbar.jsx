import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import HomeIcon from '@material-ui/icons/Home';
import LabelIcon from '@material-ui/icons/Label';

import { useRouter } from '../../lib/context';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function View({ title, parent }) {
  const classes = useStyles();
  const routes = useRouter();
  // todo split path into breadcrumbs
  console.log(routes.location.pathname);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Breadcrumbs aria-label="Breadcrumb">
          <Link color="inherit" href="/" className={classes.link}>
            <HomeIcon className={classes.icon} />
            Home
          </Link>
          linkBuilder()
          <Link color="inherit" href="/" className={classes.link}>
            <LabelIcon className={classes.icon} />
            { parent }
          </Link>
          <Typography className={classes.link} color="textPrimary">
            <LabelIcon className={classes.icon} />
            {title}
          </Typography>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
}

