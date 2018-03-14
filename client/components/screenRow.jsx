import React from 'react';

const ScreenRow = (...props) => {
  return (
    <div>
      <input type='text' readOnly value={props.value}/>
    </div>
  )

}

// we describe the props (property) that the parent element is required to pass
// into this component
ScreenRow.propTypes = {
    value: React.PropTypes.string.isRequired
}

export default ScreenRow;