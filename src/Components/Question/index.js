import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { GAME_ENDED, NEXT_QUESTION  } from '../../actions';
import { useStyles, Points, QuestionHeader, QuestionContainer, QuestionCount, QuestionBody, Answer, QuestionCategory } from './styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { QUESTIONS_NUMBER, POINTS_ARRAY } from '../../constants';
import Timer from '../Timer';

const Question = ({questions, round, record, points, onNextRound, onGameEnded})  =>  {
  const classes = useStyles();
  const [answer, setAnswer] = useState('');
  const [count, setCount] = useState(30);

  useEffect(() => {
    if (count === 0) {
      handleSubmit();
    }
  }, [count]);

  const questionCount = () => {
    return `QUESTION ${round}/${QUESTIONS_NUMBER}`;
  }

  const decrementTime = () => {
    setCount(count - 1)
  }

  const getTime = () => {
    return count;
  }

  const getQuestion = () => {
    return questions[round - 1].question;
  }

  const getQuestionAnswer = () => {
    return questions[round - 1].answer;
  }

  const getQuestionCategory = () => {
    return questions[round - 1]['category']['title']
  }

  const isAnswerCorrect = () => {
    return answer.toLowerCase() === getQuestionAnswer().toLowerCase()
  }

  const handleSubmit = () => {
    if (isAnswerCorrect() && round < QUESTIONS_NUMBER) {
      onNextRound(round-1);
      setAnswer('');
    } else if (isAnswerCorrect() && round === QUESTIONS_NUMBER) {
      onNextRound(round-1);
      onGameEnded(points);
    } else {
      onGameEnded(points);
    }
    setCount(30)
    clearTimeout(timer);

  }

  const timer = setTimeout(decrementTime, 1000)


  const getTimer = () => {
    return <Timer timer={timer} time={getTime}/>
  }

  const handleChange = (event) => {
    setAnswer(event.target.value);
  }

  const totalPoints = () => {
    return `Total points: ${points}`;
  }

  const roundPoints = () => {
    return `Points to earn: ${POINTS_ARRAY[round-1]}`
  }

  const recordPoints = () => {
    return `High points: ${record}`;
  }
  
  return (
    <>
      <QuestionContainer className={classes.root}>
        <QuestionHeader>
          <Points>
            <div>
              {totalPoints()}          
            </div>
            <div>
              {recordPoints()}
            </div>
            <div>
              {roundPoints()}
            </div>
            <div>
              {getTimer()}
            </div>
          </Points>
          <QuestionCount>
            {questionCount()}
          </QuestionCount>
          <QuestionCategory>{getQuestionCategory()}</QuestionCategory>
          {getQuestion()}
          </QuestionHeader>
        <QuestionBody>
          <Answer>
            <input onChange={handleChange} value={answer} type="text" placeholder="Answer" />
          </Answer>
          <Button 
            color='primary'
            size='large'
            variant='contained'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </QuestionBody>
      </QuestionContainer>
    </>
  )
}

function mapStateToProps(state) {
  return {
    round: state.round,
    questions: state.questions,
    points: state.points,
    record: state.record,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onNextRound: round => dispatch({ type: NEXT_QUESTION, round }),
    onGameEnded: (points) => dispatch({ type: GAME_ENDED, points }),
  }
}

Question.propTypes = {
  questions: PropTypes.array,
  round: PropTypes.number,
  onNextRound: PropTypes.func,
  onGameEnded: PropTypes.func,
  record: PropTypes.number,
  points: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);