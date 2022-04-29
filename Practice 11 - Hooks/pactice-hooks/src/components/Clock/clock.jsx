import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};

function formatTime(date){

    const hour = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)

    return `${hour} : ${minutes} : ${seconds}`
}

function Clock(props) {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {   

        const intervalTime = setInterval(() => {
            const now = formatTime(new Date())
            setTimeString(now)
        }, 1000);

        return () => {
            clearInterval(intervalTime)
        }
        
    }, [timeString])
    return (
        <div>
            <h1>{timeString}</h1>        
        </div>
    );
}

export default Clock;