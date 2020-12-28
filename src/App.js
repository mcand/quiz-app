import React from 'react';
import Quiz from './Components/Quiz';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#0b0d22',
    },
    text: {
      primary: '#ddd',
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container>
          <Quiz />
        </Grid>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
