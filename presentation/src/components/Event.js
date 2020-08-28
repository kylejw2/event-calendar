import React, { useState, useEffect } from 'react';

const Event = (props) => {

    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        setName(props.name);
        setTime(props.time);
        setType(props.type);
    }, [])

    let color = props.type === 'Appointment' ? '#F45B69' :
                    props.type === 'Meeting' ? '#456990' : '#028090';
    if (props.past) {
        color = 'grey';
    }

    const updateEvent = (bool) => {
        if (name === '' || time === '' || type === '') {
            window.alert('Unable to save changes. Name and time must be filled.')
            return;
        }

        props.updateEvent(props.index, name, time, type, bool);
    }

    return (
        <>
        <div style={{background: `${color}`, color: '#f3f3f3', border: '1px solid #efefef', padding: '4px'}} data-toggle="modal" data-target={`#updateEventModal${name.replace(/\W/g, '')}${props.day}`}>
            <span style={{fontSize: 'small'}}>
                {+time.substr(0, 2) >= 12 ? 
                    +time.substr(0,2) < 13 ? `${time} p.m.` : `${time.substr(0,2) - 12}${time.substr(2)} p.m.` 
                    : `${time} a.m.`}
            </span> {' '}
            <span className={props.completed ? 'completed' : ''}>
                {name}
            </span>
        </div>
        <div className="modal fade" id={`updateEventModal${name.replace(/\W/g, '')}${props.day}`} tabIndex="-1" aria-labelledby="updateEventModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header modal-event">
                    <h5 className="modal-title">Update Event</h5>
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
                    <button type="button" className="btn btn-warning" data-dismiss='modal' onClick={updateEvent}>Update</button>
                    <button className='btn btn-success'>Mark Completed</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Event;