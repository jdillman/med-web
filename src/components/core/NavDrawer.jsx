import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
// import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

// eslint-disable-next-line
class ResponsiveDrawer extends React.Component {
  render() {
    const { classes, theme, open, onClose } = this.props;

    console.log(theme);

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>{/* what this */}</List>
        <Divider />
        <List>{/* or this */}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        { /* <Hidden mdUp> */}
        <Drawer
          variant="temporary"
          anchor='left'
          open={open}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
        <Hidden smDown implementation="css">
          {/* PERMANENT DRAEWR ON DESKTOP?
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer> */}
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
