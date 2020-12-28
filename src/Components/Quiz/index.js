import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tutorial from '../Tutorial';
import Result from '../Result';
import Question from '../Question';

export const Quiz = ({ round, ended }) => {
  function getStep(round, ended) {
    if (round === 0) {
      return <Tutorial />;
    } else {
      if (ended) {
        return <Result />;
      } else {
        return <Question />;
      }
    }
  }

  return <>{getStep(round, ended)}</>;
};

function mapStateToProps(state) {
  return {
    round: state.round,
    ended: state.ended,
  };
}

Quiz.propTypes = {
  round: PropTypes.number,
  ended: PropTypes.bool,
};

export default connect(mapStateToProps)(Quiz);
