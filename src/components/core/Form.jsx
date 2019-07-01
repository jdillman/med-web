import React from 'react';
import Humanize from 'humanize-plus';
import { Formik, Form as FForm } from 'formik';

import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';

import { SaveButton } from './Button';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(2.5),
    display: 'flex',
    justifyContent: 'flex-end',
  },

  fieldRow: {
    margin: `${theme.spacing(2)}px 0`,
  },
  textField: {},
}));

const parseMeta = schema => {
  if (!schema.meta) {
    return {};
  }

  const { readOnly } = schema.meta() || {};

  return {
    disabled: readOnly,
  };
};

const FormField = ({ name, schema, errors, touched, ...restProps }) => {
  const classes = useStyles();
  const { _type: type } = schema;

  const formProps = {
    name,
    label: Humanize.titleCase(name),
    ...restProps,
    ...parseMeta(schema),
  };

  let field;
  switch (type) {
    case 'date':
      field = (
        <KeyboardDatePicker
          fullWidth
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="MM/dd/yyyy"
          InputAdornmentProps={{ position: 'start' }}
          {...formProps}
        />
      );
      break;
    case 'string':
      field = (
        <TextField
          fullWidth
          className={classes.textField}
          helperText={errors && touched && errors}
          margin="normal"
          variant="outlined"
          {...formProps}
        />
      );
      break;
    case 'boolean':
      field = (
        <FormControlLabel
          checked={formProps.value}
          control={<Switch />}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          {...formProps}
        />
      );
      break;
    default:
  }

  return <div className={classes.fieldRow}>{field}</div>;
};

const Form = ({ fields = [] , schema = {}, data = {} }) => {
  const { fields: allFields} = schema;
  const classes = useStyles();

  const handleSubmit = (values, actions) => {
    console.log('submitting');
    console.log(values);
    console.log(actions);
  };

  // Build defaults from schema
  const initValue = fields.reduce((acc, field) => {
    acc[field] = data[field] || allFields[field].default();
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
            {fields.map(field => (
              <FormField
                key={field}
                name={field}
                schema={allFields[field]}
                value={values[field]}
                errors={errors[field]}
                touched={touched[field]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
            <div className={classes.buttonContainer}>
              <SaveButton />
            </div>
          </FForm>
        );
      }}
    </Formik>
  );
};

export default Form;
