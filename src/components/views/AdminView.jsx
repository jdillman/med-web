import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { entities } from '../../lib/entityService';

import Dashboard from '../layouts/Dashboard';

const AdminTable = ({ data }) => {
  return data.map(item => {
    return (
      <p key={item.id}>
        <Link to={`/admin/account/${item.id}`}>{item.name}</Link>
      </p>
    );
  })
};

class AdminView extends Component {
  componentDidMount() {
    const { getAccounts } = this.props;

    getAccounts();
  }

  render() {
    const { accounts } = this.props;

    return (
      <Dashboard>
        <p>Admin - Go build something jonathan</p>
        <AdminTable data={accounts} />
      </Dashboard>
    );
  }
}

const mapState = ({ entities: { accounts } }) => ({
  accounts: accounts.allIds.map(id => accounts.byId[id]),
});

export default connect(mapState, {
  getAccounts: entities.accounts.getAll,
})(AdminView)
