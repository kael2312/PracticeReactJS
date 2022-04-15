import React, {useState} from 'react';
import PropTypes from 'prop-types';

Calculator.propTypes = {
    
};

function Calculator(props) {

    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [result, setResult] = useState(0)

    const setValueFirstNumber = (value) => {
        setFirstNumber(parseInt(value))
    }

    const setValueSecondNumber = (value) => {
        setSecondNumber(parseInt(value))
    }

    const addition = () => {
        setResult(firstNumber + secondNumber)
    }

    const subtraction = () => {
        setResult(firstNumber - secondNumber)
    }

    const multiplication = () => {
        setResult(firstNumber * secondNumber)
    }

    const division = () => {
        setResult(firstNumber / secondNumber)
    }
    
    return (
        <div>
             <input type="number" value={firstNumber} name="" id="" onInput={e => setValueFirstNumber(e.target.value)} />   
             <input type="number" value={secondNumber} name="" id="" onInput={e => setValueSecondNumber(e.target.value)} />   
             <div>Reslutt: {result}</div>

             <button onClick={addition} >+</button>
             <button onClick={subtraction}>-</button>
             <button onClick={multiplication}>*</button>
             <button onClick={division}>/</button>
        </div>
    );
}

export default Calculator;