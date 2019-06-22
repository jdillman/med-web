import { createMuiTheme } from '@material-ui/core/styles';

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
});

export default theme;
