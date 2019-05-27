import React, { Component } from 'react';
import { connect } from 'react-redux';
import { entities } from '../../lib/entityService';

import View from './View';
import Form from '../core/Form';

// import PatientList from '../../containers/PatientListContainer';
// import TaskList from '../../containers/TaskListContainer';
// 
// import './HomeView.css';

class AccountView extends Component {
  componentDidMount() {
    const { getAccounts } = this.props;

    getAccounts();
  }

  render() {
    return (
      <View type="simple">
        <section>
          <p>Accounts</p>
          <Form />
        </section>
      </View>
    );
  }
}

export default connect(null, {
  getAccounts: entities.accounts.getAll,
})(AccountView)
