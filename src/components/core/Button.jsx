import React from 'react';
import MUIButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {},
  icon: {
    marginLeft: theme.spacing(2),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

const Button = ({ children, ...restProps }) => {
  const classes = useStyles();

  return (
    <MUIButton color="primary" variant="contained" className={classes.button} {...restProps}>
      {children}
    </MUIButton>
  );
};

const DeleteButton = () => (
  <Button color="default">
    <DeleteIcon />
    Delete
  </Button>
);

const SaveButton = () => {
  const classes = useStyles();

  return (
    <Button type="submit">
      Save
      <SaveIcon className={classes.icon} />
    </Button>
  );
};

export { SaveButton, DeleteButton };

export default Button;
