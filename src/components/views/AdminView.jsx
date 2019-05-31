import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { entities } from '../../lib/entityService';

import View from './View';

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
    const { accounts, locations } = this.props;

    return (
      <View type="simple">
        <p>Admin - Go build something jonathan</p>
        <AdminTable data={accounts} />
      </View>
    );
  }
}

const mapState = ({ entities: { accounts, locations } }) => ({
  accounts: accounts.allIds.map(id => accounts.byId[id]),
});

export default connect(mapState, {
  getAccounts: entities.accounts.getAll,
})(AdminView)
