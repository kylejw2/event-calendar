import React, { useState, useEffect } from 'react';
import Event from './Event';
import quickSort from './quickSort';

const Day = (props) => {

    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [type, setType] = useState('');
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const dayEvents = [];
        const day = props.month === 11 ? 
            new Date(`${props.month - 10} ${props.day} ${props.year}`) : 
            new Date(`${props.month + 2} ${props.day} ${props.year}`);
        for (let i = 0; i < props.events.length; i++) {
            if (new Date(props.events[i].date).toString() === day.toString()) {
                dayEvents.push(props.events[i]);
            }
        }
        console.log('rerender')
        setEvents(quickSort(dayEvents));
    }, [props.events]);

    const addEvent = () => {
        if (name === '' || time === '' || type === '') {
            window.alert('Unable to save changes. All fields must be filled.')
            return;
        }
        const event = {
            name: name,
            time: time,
            type: type,
            date: props.month === 11 ? 
                new Date(`${props.month - 10} ${props.day} ${props.year}`) : 
                new Date(`${props.month + 2} ${props.day} ${props.year}`),
            completed: false
        };
        console.log(event);
        props.addEvent(event);
        setName('');
        setTime('');
        setType('');
    }

    const updateEvent = (id, name, time, type, completed) => {
        props.updateEvent(id, name, time, type, completed);
    }

    const getEventElements = () => {
        const dayEventElements = [];
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const day = props.month === 11 ? 
                new Date(`${props.month - 10} ${props.day} ${props.year}`) : 
                new Date(`${props.month + 2} ${props.day} ${props.year}`);
        console.log(events);
        for (let i = 0; i < events.length; i++) {
            let past = false;
            if (day < yesterday) {past = true}
            dayEventElements.push(<Event 
                past={past} 
                type={events[i].type} 
                time={events[i].time} 
                name={events[i].name} 
                key={events[i]._id}
                id={events[i]._id}
                updateEvent={updateEvent}
                completed={events[i].completed}
                deleteEvent={props.deleteEvent}
                monthView={true}
            />);    
        }
        return dayEventElements;
    }

    return (
        <>
        {props.day > 0 && props.day <= props.monthDays ? 
            <td>
                <div className="container-flush">
                    <div className='row'>
                        <div className="col-1">{props.day}</div>
                        <div className="col-4 offset-6 text-right">
                            <i className="fa fa-plus-circle" style={{color: '#00b533'}} data-toggle="modal" data-target={`#addEventModal${props.day}`}></i>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id={`addEventModal${props.day}`} tabIndex="-1" aria-labelledby="addEventModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header modal-day">
                            <h5 className="modal-title">Add event</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='add-event'>
                                <div className='name-time'>
                                    <input type='text' placeholder='Event name' value={name} onChange={({target}) => setName(target.value)} required/>
                                    <input type='time' value={time} onChange={({target}) => setTime(target.value)} required/>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Event type
                                    </button>
                                    <div class="dropdown-menu">
                                        <p class="dropdown-item" onClick={() => setType('Appointment')}>Appointment</p>
                                        <p class="dropdown-item" onClick={() => setType('Meeting')}>Meeting</p>
                                        <p class="dropdown-item" onClick={() => setType('Reminder')}>Reminder</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-dismiss='modal' onClick={addEvent}>Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>

            {getEventElements()}

            </td>
            
            : <td></td>
        }
        
        </>
    )
}

export default Day;