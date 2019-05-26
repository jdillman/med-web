import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    return (
      <div>
        <section>
          <p>Accounts</p>
          
        </section>
      </div>
    );
  }
}

export default connect(null, {
  getAccounts: entities.accounts.getAll,
})(HomeView)
