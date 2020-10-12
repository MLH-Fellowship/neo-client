import React from 'react';

const Clock = (props) =>
{
    return (
        <div>
            <h3 className='content-section-header'>{props.time ? props.time : "00:00:00"}</h3>
            <h5 className='content-section-header'>{props.date ? props.date : "Loading..."}</h5>
        </div>
    );
};

export default Clock;