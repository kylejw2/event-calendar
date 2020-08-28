import React, {useState, useEffect} from 'react';
import { getItem } from '../config/session';
import Week from './Week';

const Calendar = (props) => {

    if (!getItem('auth')) {
        props.history.push('/');
    }

    const [month, setMonth] = useState('');
    const [eventView, setEventView] = useState(false);
    const [monthView, setMonthView] = useState(true);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const options = {
            headers: {
                'auth': getItem('auth')
            }
        }
        fetch(`${process.env.REACT_APP_API_URL}/events`, options)
            .then(response => response.json())
            .then(data => setEvents(data));
    }, [])

    const addEvent = async (event) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth': getItem('auth')
            },
            body: JSON.stringify(event)
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/events`, options);
        const data = await response.json();
        if (response.status === 200) {
            const myEvents = JSON.parse(JSON.stringify(events));
            myEvents.push(data);
            setEvents(myEvents);
        }
    }

    const updateEvent = async (id, name, time, type, completed) => {
        const index = events.findIndex(event => event._id === id);
        const myEvent = JSON.parse(JSON.stringify(events[index]));
        myEvent.name = name;
        myEvent.time = time;
        myEvent.type = type;
        myEvent.completed = completed;
        // setEvents(myEvents);

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'auth': getItem('auth')
            },
            body: JSON.stringify(myEvent)
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/events`, options);
        const data = await response.json();
        if (response.status === 200) {
            const myEvents = JSON.parse(JSON.stringify(events));
            myEvents.push(data);
            setEvents(myEvents);
        }

    }

    const deleteEvent = async () => {

    }

    const monthBank = [28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31];

    const getMonthView = () => {
        let monthNum;
        let firstDay;
        let year;
        if (month === '') {
            return;
        } else {
            const date = new Date(month);
            monthNum = date.getMonth();
            firstDay = date.getDay();
            year = date.getFullYear();
        }

        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            monthBank[0] = 29;
        }
        const days = [];
        let j = 1;
        for (let i = 0; i < 42; i++) {
            if (j <= monthBank[monthNum]) {
                if (i === 6) {
                    days.push(<Week 
                        key={i} 
                        last={true} 
                        num={i} 
                        day={j} 
                        monthDays={monthBank[monthNum]} 
                        year={year} month={monthNum} 
                        events={events}
                        addEvent={addEvent}
                        updateEvent={updateEvent}
                    />)
                } else if (i % 7 === 0 && i > 6) {
                    days.push(<Week 
                        key={i} 
                        last={false} 
                        num={i} 
                        day={j} 
                        monthDays={monthBank[monthNum]} 
                        year={year} 
                        month={monthNum} 
                        events={events}
                        addEvent={addEvent}
                        updateEvent={updateEvent}
                    />)
                }
                if (i >= firstDay) { j++ }
            }
            
        }
        return days;

    }

    return (
        <div>
            <nav className='my-nav container-flush'>
                <div className="row" style={{paddingTop: "20px"}}>
                    <div className="col-4 offset-4 text-center">
                        <input type='month' value={month} onChange={({target}) => setMonth(target.value)} /> {' '}
                    </div>
                    <div className="col-4 text-center">
                        <button className="btn btn-primary">Toggle Event View</button>
                    </div>
                </div>
            </nav>
            {monthView ? 
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="table-head">
                            <th scope="col" style={{width: `${window.innerWidth/7}px`}}>Mon</th>
                            <th scope="col" style={{width: `${window.innerWidth/7}px`}}>Tue</th>
                            <th scope="col" style={{width: `${window.innerWidth/7}px`}}>Wed</th>
                            <th scope="col" style={{width: `${window.innerWidth/7}px`}}>Thu</th>
                            <th scope="col" style={{width: `${window.innerWidth/7}px`}}>Fri</th>
                            <th scope="col" style={{width: `${window.innerWidth/7}px`}}>Sat</th>
                            <th scope="col" style={{width: `${window.innerWidth/7}px`}}>Sun</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getMonthView()}
                        </tbody>
                    </table>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default Calendar;