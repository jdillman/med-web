import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Entities } from '../../lib/EntityService';

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
  getAccounts: Entities.accounts.getAll,
})(HomeView)
