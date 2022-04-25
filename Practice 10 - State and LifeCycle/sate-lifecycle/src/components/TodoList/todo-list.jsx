import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    addTodo: PropTypes.func
};

TodoList.defaultProp = {
    addTodo:  null
}

function TodoList({addTodo}) {

    const [inputValue, setInputValue] = useState('')

    const onInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const onAddTodo = () => {
        if (addTodo) {
            addTodo(inputValue)
        }
    }

    return (
        <div>
            <input onChange={onInputValue} type="text" />
            <button onClick={onAddTodo}>Add</button>
        </div>
    );
}

export default TodoList;