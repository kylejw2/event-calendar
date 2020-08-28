import React, { useState, useEffect } from 'react';
import Event from './Event';

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
        setEvents(quickSort(dayEvents));
    }, []);

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
        props.addEvent(event);
        const myEvents = JSON.parse(JSON.stringify(events));
        myEvents.push(event);
        setEvents(myEvents);
        setName('');
        setTime('');
        setType('');
    }

    const quickSort = (arr) => {
        if (arr.length < 2) { return arr; }
        const pivot = arr[arr.length - 1];
        const leftArr = [];
        const rightArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (+pivot.time.substr(0, 2) > +arr[i].time.substr(0, 2)) {
                leftArr.push(arr[i]);
            } else if (+pivot.time.substr(0, 2) < +arr[i].time.substr(0, 2)) {
                rightArr.push(arr[i]);
            } else if (+pivot.time.substr(3, 2) >= +arr[i].time.substr(3, 2)) {
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);
            }
        }

        if (leftArr.length > 0 && rightArr.length > 0) {
            return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
        } else if (leftArr.length > 0) {
            return [...quickSort(leftArr), pivot];
        } else {
            return [pivot, ...quickSort(rightArr)];
        }
    }

    const updateEvent = (index, name, time, type, completed) => {
        const myEvents = JSON.parse(JSON.stringify(events));
        myEvents[index].name = name;
        myEvents[index].time = time;
        myEvents[index].type = type;
        myEvents[index].completed = completed;
        setEvents(myEvents);

        props.updateEvent(myEvents[index]._id, name, time, type, completed);
    }

    const getEventElements = () => {
        const dayEventElements = [];
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const day = props.month === 11 ? 
                new Date(`${props.month - 10} ${props.day} ${props.year}`) : 
                new Date(`${props.month + 2} ${props.day} ${props.year}`);
        for (let i = 0; i < events.length; i++) {
            let past = false;
            let completed = false;
            if (day < yesterday) {past = true}
            if (events[i].completed) {completed = true}
            dayEventElements.push(<Event 
                past={past} 
                type={events[i].type} 
                time={events[i].time} 
                name={events[i].name} 
                key={i}
                index={i}
                updateEvent={updateEvent}
                completed={completed}
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
                                <div>
                                    <input type='radio' name='type' onChange={() => setType('Appointment')} /> {' Appointment'}
                                </div>
                                <div>
                                    <input type='radio' name='type' onChange={() => setType('Meeting')} /> {' Meeting'}
                                </div>
                                <div>
                                    <input type='radio' name='type' onChange={() => setType('Reminder')} /> {' Reminder'}
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