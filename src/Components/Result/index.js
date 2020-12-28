import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Title, Message, Points, ResultContainer, Record } from './styles';
import { GAME_RESTART } from '../../actions';
import { QUESTIONS_NUMBER } from '../../constants';
import PropTypes from 'prop-types';

export const Result = ({ points, round, onRestart, record }) => {

  const handleRestart = () => {
    onRestart()
  }

  const getResultMessage = () => {
    if (round > QUESTIONS_NUMBER ) {
      return 'Congratulations, You have won!'
    } else {
      return 'Unfortunatelly you have lost. Try again and goock luck!'
    }
  }

  return (
    <ResultContainer>
      <Title>Result</Title>
      <Message>{getResultMessage()}</Message>
      <Points>You earned {points} point(s)</Points>
      <Record>Your record is {record} point(s)</Record>

      <Button 
        variant='contained'
        color='primary'
        size='large'
        onClick={handleRestart}>
        Restart
      </Button>      
    </ResultContainer>
  );
}

function mapStateToProps(state) {
  return {
    points: state.points,
    round: state.round,
    record: state.record,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRestart: () => dispatch({ type: GAME_RESTART }),
  }
}

Result.propTypes = {
  points: PropTypes.number,
  round: PropTypes.number,
  onRestart: PropTypes.func,
  record: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);