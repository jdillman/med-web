import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

// import { appStart } from './modules/UIModule';
import HomeView from './components/views/HomeView';
import DemoView from './components/views/DemoView';

// todo dynamic import
import AccountView from './components/views/AccountView';
import AdminView from './components/views/AdminView';

import './styles/normalize.css';

const Routes = () => (
  <React.Fragment>
    <Route exact path='/' component={HomeView} />
    <Route exact path='/demo' component={DemoView} />

    <Route exact path='/admin/account/:id' component={AccountView} />
    <Route exact path='/admin' component={AdminView} />
  </React.Fragment>
);

const Loading = () => (
  <div>Loading</div>
);

const theme = createMuiTheme({
  type: 'light',
  primary: {
    light: '#7986cb',
    main: '#3f51b5',
    dark: '#303f9f',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057',
    dark: '#c51162',
    contrastText: '#fff',
  },
  background: {
    paper: '#fff',
    default: '#fafafa',
  },
});

class App extends Component {
  componentDidMount() {
    // this.props.appStart();
  }

  render() {
    const isReady = true;

    return (
      <ThemeProvider theme={theme}>
        <section className='main-app'>
          {
            !isReady
            ? <Loading />
            : <Routes />
          }
        </section>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = () => (
  { ready: false }
);

export default connect(mapStateToProps)(App);
