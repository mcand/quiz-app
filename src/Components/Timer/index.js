import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({time, timer}) => {

  timer

  return (
    <>
      {time() >= 0 ? time() : 0}
    </>
  )
}

Timer.propTypes = {
  time: PropTypes.number,
  timer: PropTypes.func,
}

export default Timer;