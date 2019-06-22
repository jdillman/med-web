import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

import Routes from './components/Routes';

import './styles/normalize.css';

const Loading = () => (
  <div>Loading</div>
);

const theme = createMuiTheme({
  palette: {
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
  },
}); /*

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f182a3',
      main: '#bc5274',
      dark: '#892149',
      contrastText: '#fff',
    },
    secondary: {
      light: '#55b873',
      main: '#1c8747',
      dark: '#00591e',
      contrastText: '#fff',
    },
  },
});*/

class App extends Component {
  componentDidMount() {
    // this.props.appStart();
  }

  render() {
    const isReady = true;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={theme}>
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
