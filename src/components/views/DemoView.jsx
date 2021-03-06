import React, { Component } from 'react';
import { connect } from 'react-redux';
import { entityActions } from '../../lib/entityService';

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
          <p>Demo Page, sell it here</p>
        </section>
      </div>
    );
  }
}

export default connect(null, {
  getAccounts: entityActions.accounts.getAll,
})(HomeView);
