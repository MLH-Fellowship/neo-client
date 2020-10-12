import React from 'react';

import './Clock.scss';

const Clock = (props) =>
{
    return (
        <div className='Clock'>
            <h3 className='content-section-header time'>{props.time ? props.time : "00:00:00"}</h3>
            <h5 className='content-section-header date'>{props.date ? props.date : "Loading..."}</h5>
        </div>
    );
};

export default Clock;