import React from 'react';
import Humanize from 'humanize-plus';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
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

function buildCrumbs(pathname, title) {
  const paths = pathname.split('/').filter(Boolean);
  const pathLen = paths.length;
  const homeUrl = '/';

  let crumbPath = homeUrl;
  const crumbs = paths.map((path, i) => {
    crumbPath += path;
    const isLast = pathLen === i + 1;
    const crumb = {
      text: (isLast && title) || Humanize.titleCase(path),
      url: `${crumbPath}`,
      CrumbIcon: LabelIcon,
    };

    crumbPath += '/';

    return crumb;
  });

  crumbs.unshift({
    text: 'Home',
    url: homeUrl,
    CrumbIcon: HomeIcon,
  });

  return crumbs;
}

export default function BreadcrumbToolbar({ title }) {
  const classes = useStyles();

  const {
    location: { pathname = '' },
  } = useRouter();
  const crumbs = buildCrumbs(pathname, title);

  function renderBreadcrumbs() {
    return crumbs.map(({ text, url, CrumbIcon }) => (
      <Link key={text} color="inherit" component={RouterLink} to={url} className={classes.link}>
        <CrumbIcon className={classes.icon} />
        <Typography>{text}</Typography>
      </Link>
    ));
  }

  return (
    <AppBar position="static" color="default">
      <Toolbar component={Container} variant="dense">
        <Breadcrumbs aria-label="Breadcrumb">{renderBreadcrumbs()}</Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
}
