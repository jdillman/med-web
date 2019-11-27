import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'use-react-router';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { entities } from 'lib/entityService';
import accountEntity from 'entities/account';
import View from '../layouts/View';
import Form from '../core/Form';
import AccountList from '../ui/AccountList';

function AccountForm({ account }) {
  return <Form entity={accountEntity} data={account} />;
}

function AccountView({ id, ...restProps }) {
  if (id) {
    return <AccountForm id={id} {...restProps} />;
  }

  return <AccountList {...restProps} />;
}

export default props => {
  const {
    match: {
      params: { id: accountId },
    },
  } = useRouter();
  const account = useSelector(({ entities: { accounts } }) => accounts.byId[accountId]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(entities.accounts.getAll());
  }, []);

  return (
    <View title="Accounts">
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <AccountView account={account} id={accountId} {...props} />
          </Paper>
        </Grid>
      </Grid>
    </View>
  );
};
