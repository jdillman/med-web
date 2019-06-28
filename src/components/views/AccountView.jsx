import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { entities } from '../../lib/entityService';
import { schema } from '../../entities/account';
import View from '../layouts/View';

import Form from '../core/Form';

class AccountView extends Component {
  componentDidMount() {
    const {
      getAccount,
      match: {
        params: { id },
      },
    } = this.props;

    getAccount(id);
  }

  render() {
    const { account = {} } = this.props;
    const { name } = account;

    return (
      <View title={name}>
        <Grid container spacing={2}>
          <Form schema={schema} data={account} />
        </Grid>
      </View>
    );
  }
}

const mapState = (
  { entities: { accounts } },
  {
    match: {
      params: { id },
    },
  }
) => ({
  account: accounts.byId[id],
});

export default withRouter(connect(
  mapState,
  {
    getAccount: entities.accounts.get,
  }
)(AccountView));
