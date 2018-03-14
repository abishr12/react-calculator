import React from 'react';
import ScreenRow from './screenRow.jsx';
import PropTypes from 'prop-types';

const Screen = props => {
    
  return (
    <div className='screen'>
      <ScreenRow value={props.question}/>
      <ScreenRow value={props.answer}/>
    </div>
  )
}

// Define our props expected from the parent component
Screen.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}


export default Screen;