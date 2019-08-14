import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(2).required(),
  active: Yup.boolean().default(),
  active_at: Yup.date(),
  created_at: Yup.date(),
  updated_at: Yup.date(),
});

export { schema };

export default {
  adapter: {
    path: 'accounts',
    // normalizer: item => { console.log(item, '<--- coming in')},
    // serializer: item => { console.log(item, 'going out --->')},
  },
  schema,
}
