import React from 'react';

const Clock = (props) =>
{
    return (
        <div>
            <h3>{props.time ? props.time : "00:00:00"}</h3>
            <h5>{props.date ? props.date : "Loading..."}</h5>
        </div>
    );
};

export default Clock;