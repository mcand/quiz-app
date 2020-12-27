import React from 'react';
import { WelcomeContainer, RuleList, Rule, Title, Welcome } from './styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { GAME_STARTED } from '../../actions';
import QuestionService from '../../Services/QuestionService';
import PropTypes from 'prop-types';
const Tutorial = ({onGameStart}) => {

  function handleGameStart() {
    QuestionService.getQuestions()
      .then((res) => onGameStart(res.data))
  }

  return (
    <WelcomeContainer>
      <Title className='title'>Quiz Application</Title>
      <Welcome>
        <p>Welcome to the Quiz.</p>
        <p>You will be prompted with <i>30 questions</i>. The the rules are:</p>
        <RuleList>
          <Rule>You will answer 30 questions</Rule>
          <Rule>Each round you will receive the double of the points from the previous.</Rule>
          <Rule>You win if you can answer all the 30 questions</Rule>
          <Rule>If you answer an answer incorrectly, you lose and should start over</Rule>
          <Rule>Good Luck 🍀</Rule>
          </RuleList>
      </Welcome>
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={handleGameStart}>
          Start Game
      </Button>
    </WelcomeContainer>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onGameStart: (questions) => dispatch({ type: GAME_STARTED, questions}),
  };
}

Tutorial.propTypes = {
  onGameStart: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Tutorial);