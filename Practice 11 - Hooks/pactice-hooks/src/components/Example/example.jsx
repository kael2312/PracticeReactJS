import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Example.propTypes = {
    
};

function Example(props) {

    const [inputText, setInputText] = useState('')
    const onInputChange = (e) => {
        const newValue = e.target.value
        setInputText(newValue)
        console.log(inputText);
    }

    return (
        <div>
            <input type="text" onKeyUp={onInputChange} />

            <div>
            Hello: {inputText}
            </div>
        </div>
    );
}

export default Example;