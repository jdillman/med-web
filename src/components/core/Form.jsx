import React from 'react';
import Humanize from 'humanize-plus';
import { Formik, Form as FForm } from 'formik';

import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2),
  },
  fieldRow: {
    width: '100%',
    margin: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const FormField = ({ name, type }) => {
  const classes = useStyles();

  let field = name;
  switch (type) {
    case 'date':
      field = (
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label={Humanize.titleCase(name)}
          format="MM/dd/yyyy"
          InputAdornmentProps={{ position: 'start' }}
        />
      );
      break;
    case 'string':
      field = (
        <TextField
          label={Humanize.titleCase(name)}
          className={classes.textField}
          helperText="help text"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      );
      break;
    case 'boolean':
      field = (
        <FormControlLabel
          checked="false"
          control={<Switch />}
          label={Humanize.titleCase(name)}
          className={classes.textField}
          helperText="help text"
          margin="normal"
          variant="outlined"
        />
      );
      break;
    default:
  }

  return (
    <div className={classes.fieldRow}>
      { field }
    </div>

  );
}

const Form = ({ schema = {} }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: ' default name ',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (values, actions) => {
    console.log('submitting')
  };

  console.log(schema);
 
  const fields = Object.keys(schema).map(key => {
    return <FormField key={key} name={key} type={schema[key]} />;
  });
  
  const data = { email: '', password: '' };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
      className={classes.container}
    >
      {() => (
        <FForm
          noValidate
          autoComplete="off"
        >
          { fields }
        </FForm>
      )}

      
    </Formik>
  )
}

export default Form;
