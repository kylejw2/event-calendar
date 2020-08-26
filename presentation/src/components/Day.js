import React from 'react';

const Day = (props) => {


    return (
        <>
        {props.day > 0 && props.day <= props.monthDays ? 
            <td>
                <div className="container-flush">
                    <div className='row'>
                        <div className="col-1">{props.day}</div>
                        <div className="col-4 offset-6 text-right">
                            <i className="fa fa-edit" style={{color: '#00aaff'}}></i> {' '}
                            <i className="fa fa-plus-circle" style={{color: '#00b533'}}></i>
                        </div>
                    </div>
                </div>
                
                
            </td>
            : <td></td>
        }
        </>
    )
}

export default Day;