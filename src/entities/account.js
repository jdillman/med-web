import { object, string, boolean, date } from 'yup';

const schema = object().shape({
  name: string()
    .default('ActName')
    .min(2)
    .required(),
  note: string().max(400),
  active: boolean(),
  active_at: date().nullable(),
  created_at: date().meta({ readOnly: true  }),
  updated_at: date().meta({ readOnly: true  }),
});

export { schema };

export default {
  adapter: {
    path: 'accounts',
    // normalizer: item => { console.log(item, '<--- coming in')},
    // serializer: item => { console.log(item, 'going out --->')},
  },
  schema,
};
