import React from 'react';
import useRouter from 'use-react-router';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import accountEntity from 'entities/account';
import View from '../layouts/View';
import EntityForm from '../core/EntityForm';
import AccountList from '../ui/AccountList';

function AccountView({ id, ...restProps }) {
  if (id) {
    return <EntityForm entity={accountEntity} id={id} />;
  }

  return <AccountList {...restProps} />;
}

export default props => {
  const {
    match: {
      params: { id: accountId },
    },
  } = useRouter();

  return (
    <View title="Accounts">
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <AccountView id={accountId} {...props} />
          </Paper>
        </Grid>
      </Grid>
    </View>
  );
};
