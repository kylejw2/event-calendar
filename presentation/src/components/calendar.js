import React, {useState, useEffect} from 'react';
import { getItem } from '../config/session';
import Week from './Week';
import Event from './Event';

const Calendar = (props) => {

    if (!getItem('auth')) {
        props.history.push('/');
    }

    const [month, setMonth] = useState('');
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
        const myEvent = {...events[index]};
        myEvent.name = name;
        myEvent.time = time;
        myEvent.type = type;
        myEvent.completed = completed;

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
            const myEvents = [...events];
            myEvents.splice(index, 1, data);
            setEvents(myEvents);
        }

    }

    const deleteEvent = async (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                'auth': getItem('auth'),
                'id': id
            }
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/events`, options);
        if (response.status === 200) {
            const index = events.findIndex(event => event._id === id);
            const myEvents = [...events];
            myEvents.splice(index, 1);
            setEvents(myEvents);
        }
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
                        deleteEvent={deleteEvent}
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
                        deleteEvent={deleteEvent}
                    />)
                }
                if (i >= firstDay) { j++ }
            }
            
        }
        return days;
    }

    const getEventView = () => {
        let eventList = events.filter((event, i) => new Date(event.date).getMonth() + 1 === +month.substr(5, 2))
        if (eventList.length === 0){return}
        eventList.sort((a, b) => {
            if (new Date(a.date) < new Date(b.date)) {
                return -1;
            } else if (new Date(a.date) > new Date(b.date)) {
                return 1;
            } else {
                return +a.time.substr(0,2) - +b.time.substr(0,2);
            }
        })
        return eventList.map((event, i) => {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return <Event 
                type={event.type} 
                time={event.time} 
                name={event.name} 
                key={event._id}
                id={event._id}
                updateEvent={updateEvent}
                completed={event.completed}
                deleteEvent={deleteEvent}
                monthView={false}
                date={new Date(event.date)}
                past={new Date(event.date) < yesterday ? true : false}
            /> 
        })
    }

    const toggleView = () => {
        setMonthView(prev => !prev);
    }

    return (
        <div>
            <nav className='my-nav container-flush'>
                <div className="row" style={{paddingTop: "20px"}}>
                    <div className="col-4 offset-4 text-center">
                        <input type='month' value={month} onChange={({target}) => setMonth(target.value)} /> {' '}
                    </div>
                    <div className="col-4 text-center">
                        <button className="btn btn-primary" onClick={toggleView}>Toggle Event View</button>
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
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="table-head">
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Event</th>
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Date</th>
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Time</th>
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Type</th>
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Configure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getEventView()}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Calendar;