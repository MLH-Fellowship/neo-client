import React from 'react';

import ClockContainer from "../Clock/ClockContainer";

const TimeStats = (props) =>
{
    return (
        <div className="TimeStats">
            <ClockContainer />
            <p>Data updates every 30 minutes</p>
        </div>
    );
}

export default TimeStats;