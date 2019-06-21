import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { entities } from '../../lib/entityService';

import View from '../layouts/View';

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
    const admin = true;

    return (
      <View>
        <p>Home</p>
        { admin && <Link to="/admin">Admin</Link> }
      </View>
    );
  }
}

export default connect(null, {
  getAccounts: entities.accounts.getAll,
})(HomeView)
