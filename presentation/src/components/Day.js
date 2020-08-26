import React, { useState } from 'react';

const Day = (props) => {

    const [name, setName] = useState('');
    const [time, setTime] = useState(''); //this probs shouldn't be a string
    const [type, setType] = useState('');

    const getEvents = () => {
        const day = props.month === 11 ? 
            new Date(`${props.month - 10} ${props.day} ${props.year}`) : 
            new Date(`${props.month + 2} ${props.day} ${props.year}`);
        for (let i = 0; i < props.events.length; i++) {
            if (props.events[i].date === day) {
                // push to a list of daily events
            }
        }
    }

    const addEvent = () => {

    }

    return (
        <>
        {props.day > 0 && props.day <= props.monthDays ? 
            <td>
                <div className="container-flush">
                    <div className='row'>
                        <div className="col-1">{props.day}</div>
                        <div className="col-4 offset-6 text-right">
                            <i className="fa fa-edit" style={{color: '#00aaff'}}></i> {' '}
                            <i className="fa fa-plus-circle" style={{color: '#00b533'}} data-toggle="modal" data-target="#exampleModal" onClick={addEvent}></i>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add event</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input type='text' placeholder='Event name' value={name} onChange={({target}) => setName(target.value)} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            {getEvents()}
                
            </td>
            
            : <td></td>
        }
        
        </>
    )
}

export default Day;