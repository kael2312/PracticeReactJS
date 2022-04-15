import React from 'react';
import PropTypes from 'prop-types';

Alert.propTypes = {
    text: PropTypes.string
};

Alert.defaultProps = {
    text: ''
}

function Alert({text}) {
    return (
        <div className="alert alert-warning" role="alert">
            {text}
        </div>
    );
}

export default Alert;