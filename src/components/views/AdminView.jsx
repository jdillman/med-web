import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { entities } from '../../lib/entityService';

// import PatientList from '../../containers/PatientListContainer';
// import TaskList from '../../containers/TaskListContainer';
// 
// import './HomeView.css';

class HomeView extends Component {
  componentDidMount() {
    const { getAccounts } = this.props;

    getAccounts();
  }

  render() {
    const { accounts, locations } = this.props;

    return (
      <div>
        <section>
          <p>Admin - Go build something jonathan</p>
          {
            accounts.map(account => {
              const mangeAccountUrl = `/admin/manage/${account.id}`;
              return (
                <p>
                  <Link to={mangeAccountUrl}>{account.name}</Link>
                </p>
              );
            })
          }
        </section>
      </div>
    );
  }
}

const mapState = ({ entities: { accounts, locations } }) => ({
  accounts: accounts.allIds.map(id => accounts.byId[id]),
});

export default connect(mapState, {
  getAccounts: entities.accounts.getAll,
})(HomeView)
