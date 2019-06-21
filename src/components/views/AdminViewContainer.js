import React from 'react';
import { connect } from 'react-redux';
import { entities } from '../../lib/entityService';
import AdminView from './AdminView';

// todo learn hooks better
class AdminViewGetter extends React.Component {
  componentDidMount() {
    const { getAccounts } = this.props;
    
    getAccounts();
  }

  render() {
    return <AdminView {...this.props} />;
  }
}

const mapState = ({ entities: { accounts } }) => ({
  accounts: accounts.allIds.map(id => accounts.byId[id]),
});

export default connect(mapState, {
  getAccounts: entities.accounts.getAll,
})(AdminViewGetter)
