import React from 'react';
import Quiz from './Components/Quiz';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';
import QuestionService from './Services/QuestionService';
import { QUESTIONS_LOADED } from './actions';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#e4e4e4',
    },
    text: {
      primary: '#0b0d22',
    },
  },
});

QuestionService.getQuestions().then(questions =>
  store.dispatch({ type: QUESTIONS_LOADED, questions })
);

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
