import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { entityActions } from '../../lib/entityService';
import View from '../layouts/View';

class HomeView extends Component {
  componentDidMount() {
    const { getAccounts } = this.props;

    getAccounts();
  }

  render() {
    const admin = true;

    return (
      <View>
        <Container>
          <p>Home</p>
          {admin && <Link to="/admin">Admin</Link>}
        </Container>
      </View>
    );
  }
}

export default connect(null, {
  getAccounts: entityActions.accounts.getAll,
})(HomeView);
