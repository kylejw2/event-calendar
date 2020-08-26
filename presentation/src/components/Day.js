import React from 'react';

const Day = (props) => {
    return (
        <td>{props.day > 0 ? 
            props.day <= props.monthDays ? props.day : ''
            : ''}</td>
    )
}

export default Day;