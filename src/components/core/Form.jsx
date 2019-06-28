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
    width: '100%',
  },
  fieldRow: {
    margin: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const FormField = ({ name, type, errors, touched, ...restProps }) => {
  const classes = useStyles();

  let field;
  switch (type) {
    case 'date':
      field = (
        <KeyboardDatePicker
          name={name}
          autoOk
          variant="inline"
          inputVariant="outlined"
          label={Humanize.titleCase(name)}
          format="MM/dd/yyyy"
          InputAdornmentProps={{ position: 'start' }}
          {...restProps}
        />
      );
      break;
    case 'string':
      field = (
        <TextField
          name={name}
          label={Humanize.titleCase(name)}
          className={classes.textField}
          helperText={errors && touched && errors}
          margin="normal"
          variant="outlined"
          fullWidth
          {...restProps}
        />
      );
      break;
    case 'boolean':
      field = (
        <FormControlLabel
          name={name}
          checked={restProps.value}
          control={<Switch />}
          label={Humanize.titleCase(name)}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          {...restProps}
        />
      );
      break;
    default:
  }

  return <div className={classes.fieldRow}>{field}</div>;
};

const Form = ({ schema = {}, data = {} }) => {
  const { fields } = schema;
  const classes = useStyles();

  const handleSubmit = (values, actions) => {
    console.log('submitting');
    console.log(values);
    console.log(actions);
  };

  // Build defaults from schema
  const initValue = Object.keys(fields).reduce((acc, field) => {
    acc[field] = data[field] || fields[field].default();
    return acc;
  }, {});

  return (
    <Formik
      enableReinitialize
      initialValues={initValue}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => {
        return (
          <FForm className={classes.container} noValidate autoComplete="off">
            {Object.keys(fields).map(field => {
              const { _type: type } = fields[field];
              return (
                <FormField
                  key={field}
                  type={type}
                  name={field}
                  value={values[field]}
                  errors={errors[field]}
                  touched={touched[field]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              );
            })}
          </FForm>
        );
      }}
    </Formik>
  );
};

export default Form;
