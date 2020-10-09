import React from 'react';

const Clock = (props) =>
{
    return (
        <div>
            <h3>{props.time}</h3>
            <h5>{props.date}</h5>
        </div>
    );
};

export default Clock;