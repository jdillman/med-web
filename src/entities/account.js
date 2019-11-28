/* This file should be generatable with a simple DSL */
import { object, string, boolean, date } from 'yup';

const locationSchema = object().shape({});

const schema = object().shape({
  name: string()
    .default('ActName')
    .min(2)
    .required(),
  note: string().max(400),
  note2: string().max(4),
  active: boolean().nullable(),
  active_at: date().nullable(),
  created_at: date().meta({ readOnly: true }),
  updated_at: date().meta({ readOnly: true }),
});

export default {
  name: 'accounts',
  adapter: {
    path: 'accounts',
    // normalizer: item => { console.log(item, '<--- coming in')},
    // serializer: item => { console.log(item, 'going out --->')},
  },
  schema,
  formFields: ['active', 'name', 'note', 'note2', 'created_at'],
  children: { locations: locationSchema },
};
