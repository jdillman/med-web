import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import { appStart } from './modules/UIModule';
import HomeView from './components/views/HomeView';
// import PatientsView from './components/views/HomeView';
// <Route exact path="/patients" component={PatientsView} />
import './App.css';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={HomeView} />
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
