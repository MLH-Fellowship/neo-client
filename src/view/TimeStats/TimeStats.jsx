import React from 'react';

import "./TimeStats.scss";
import ClockContainer from "../Clock/ClockContainer";

const TimeStats = (props) =>
{
    return (
        <div className="TimeStats content-section">
            <ClockContainer />
            <h2 className='note'>Data updates every 30 minutes</h2>
        </div>
    );
}

export default TimeStats;