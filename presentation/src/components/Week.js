import React from 'react';
import Day from './Day';

const Week = (props) => {

    const getDays = () => {
        let days = [];
        let day = props.day;
        if (props.last) {
            for (let i = props.num; i >= 0; i--) {
                days.unshift(<Day key={`${props.year}-${props.month}-${day}`} day={day} monthDays={props.monthDays}/>);
                day--;
            }
        } else {
            for (let i = 0; i < 7; i++) {
                days.push(<Day key={`${props.year}-${props.month}-${day}`} day={day} monthDays={props.monthDays}/>);
                day++;
            }
        }
        return days;
    }

    return (
        <>
            <tr style={{height: '120px'}}>
                {getDays()}
            </tr>
        </>
    )
}

export default Week;