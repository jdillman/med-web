import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

import defaultTheme from './themes/default';
import Routes from './components/Routes';

import './styles/normalize.css';

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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <section className='main-app'>
            {
              !isReady
              ? <Loading />
              : <Routes />
            }
          </section>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    );
  }
}

const mapStateToProps = () => (
  { ready: false }
);

export default connect(mapStateToProps)(App);
