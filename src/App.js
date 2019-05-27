import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import { appStart } from './modules/UIModule';
import HomeView from './components/views/HomeView';
import DemoView from './components/views/DemoView';

// todo dynamic import
import AccountView from './components/views/AccountView';
import AdminView from './components/views/AdminView';

import './App.css';
import './normalize.css';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={HomeView} />
    <Route exact path="/demo" component={DemoView} />

    <Route exact path="/admin/account/:id" component={AccountView} />
    <Route exact path="/admin" component={AdminView} />
  </React.Fragment>
);

const Loading = () => (
  <div>Loading</div>
);

class App extends Component {
  componentDidMount() {
    // this.props.appStart();
  }

  render() {
    const isReady = true;

    return (
      <section className="main-app">
        {
          !isReady
          ? <Loading />
          : <Routes />
        }
      </section>
    );
  }
}

const mapStateToProps = () => (
  { ready: false }
);

export default connect(mapStateToProps)(App);
