import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as accounts } from '../../lib/AccountService';

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
      <div className="HomeView">
        <section>
          <p>Home</p>
        </section>
      </div>
    );
  }
}

export default connect(null, {
  getAccounts: accounts.getAll,
})(HomeView)
