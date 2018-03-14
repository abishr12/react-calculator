import React from 'react';
import PropTypes from 'prop-types';

const ScreenRow = props => {
    return (
        <div>
            <input type='text' readOnly value={props.value}/>
        </div>
    )

}

// we describe the props (property) that the parent element is required to pass
// into this component
ScreenRow.propTypes = {
    value: PropTypes.string.isRequired
}

export default ScreenRow;