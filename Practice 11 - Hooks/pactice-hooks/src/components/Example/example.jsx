import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Example.propTypes = {
    
};

function Example(props) {

    const [inputText, setInputText] = useState('')

    // useEffect(() => {

    // }, [inputText])

    const onInputChange = (e) => {
        const newValue = e.target.value
        setInputText(newValue)
    }

    return (
        <div>
            <input type="text" onChange={onInputChange} />

            <div>
            Hello: {inputText}
            </div>
        </div>
    );
}

export default Example;