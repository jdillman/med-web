import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Paper from '@material-ui/core/Paper';
import { entities } from '../../lib/entityService';

import View from './View';
import Form from '../core/Form';

// import PatientList from '../../containers/PatientListContainer';
// import TaskList from '../../containers/TaskListContainer';
//
// import './HomeView.css';

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
    const { schema, account } = this.props;

    return (
      <View type="simple">
        <Paper>
          <Form schema={schema} data={account} />
        </Paper>
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
  schema: accounts.schema,
  account: accounts.byId[id],
});

export default withRouter(connect(
  mapState,
  {
    getAccount: entities.accounts.get,
  }
)(AccountView));
