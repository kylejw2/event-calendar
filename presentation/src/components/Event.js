import React, { useState, useEffect } from 'react';

const Event = (props) => {

    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [type, setType] = useState('');
    const [completed, setCompleted] = useState(false);
    const [color, setColor] = useState('');

    useEffect(() => {
        setName(props.name);
        setTime(props.time);
        setType(props.type);
        setCompleted(props.completed);
        setColor(
            props.type === 'Appointment' ? '#F45B69' :
                    props.type === 'Meeting' ? '#456990' : '#028090'
        )
    }, [])

    const updateEvent = (bool) => {
        let prev = completed;
        if (bool) {
            prev = !prev;
            setCompleted(prev);
        }
        if (name === '' || time === '' || type === '') {
            window.alert('Unable to save changes. Name and time must be filled.')
            return;
        }
        props.updateEvent(props.id, name, time, type, prev);
    }

    return (
        <>
        { props.monthView ? 
        <>
        <div style={{background: `${props.past ? 'grey' :  color}`, color: '#f3f3f3', border: '1px solid #efefef', padding: '4px'}} data-toggle="modal" data-target={`#updateEventModal${name.replace(/\W/g, '')}${props.day}`}>
            <span style={{fontSize: 'small'}}>
                {+time.substr(0, 2) >= 12 ? 
                    +time.substr(0,2) < 13 ? `${time} p.m.` : `${time.substr(0,2) - 12}${time.substr(2)} p.m.` 
                    : `${time} a.m.`}
            </span> {' '}
            <span className={completed ? 'completed' : ''}>
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
                        <div class="dropdown">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Event type
                            </button>
                            <div class="dropdown-menu">
                                <p class="dropdown-item" onClick={() => {setType('Appointment'); setColor('#F45B69')}}>Appointment</p>
                                <p class="dropdown-item" onClick={() => {setType('Meeting'); setColor('#456990')}}>Meeting</p>
                                <p class="dropdown-item" onClick={() => {setType('Reminder'); setColor('#028090')}}>Reminder</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-warning" data-dismiss='modal' onClick={() => updateEvent(false)}>Update</button>
                    <button className='btn btn-success' data-dismiss='modal' onClick={() => updateEvent(true)}>{completed ? 'Mark Incomplete' : 'Mark Completed'}</button>
                    <button className='btn btn-danger' data-dismiss='modal' onClick={() => props.deleteEvent(props.id)}>Delete</button>
                </div>
                </div>
            </div>
        </div>
        </>
        :
        <>
        <tr style={{background: `${props.past ? 'grey' :  color}`, color: '#f3f3f3'}}>
            <td className={completed ? 'completed' : ''}>
                {name}
            </td>
            <td>
                {props.date.toString().substr(0, 15)}
            </td>
            <td>
                {+time.substr(0, 2) >= 12 ? 
                    +time.substr(0,2) < 13 ? `${time} p.m.` : `${time.substr(0,2) - 12}${time.substr(2)} p.m.` 
                    : `${time} a.m.`}
            </td>
            <td>
                {type}
            </td>
            <td>
                <button style={{color: '#f3f3f3'}}data-toggle="modal" data-target={`#updateEventModal${name.replace(/\W/g, '')}${props.id}`} className="btn btn-outline-secondary">Update</button>
            </td>
        </tr>
        <div className="modal fade" id={`updateEventModal${name.replace(/\W/g, '')}${props.id}`} tabIndex="-1" aria-labelledby="updateEventModalLabel" aria-hidden="true">
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
                        <div class="dropdown">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Event type
                            </button>
                            <div class="dropdown-menu">
                                <p class="dropdown-item" onClick={() => {setType('Appointment'); setColor('#F45B69')}}>Appointment</p>
                                <p class="dropdown-item" onClick={() => {setType('Meeting'); setColor('#456990')}}>Meeting</p>
                                <p class="dropdown-item" onClick={() => {setType('Reminder'); setColor('#028090')}}>Reminder</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-warning" data-dismiss='modal' onClick={() => updateEvent(false)}>Update</button>
                    <button className='btn btn-success' data-dismiss='modal' onClick={() => updateEvent(true)}>{completed ? 'Mark Incomplete' : 'Mark Completed'}</button>
                    <button className='btn btn-danger' data-dismiss='modal' onClick={() => props.deleteEvent(props.id)}>Delete</button>
                </div>
                </div>
            </div>
        </div>
        </>
        } 
        </>
    )
}

export default Event;