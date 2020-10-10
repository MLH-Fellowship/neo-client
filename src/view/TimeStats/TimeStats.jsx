import React from 'react';

import "./TimeStats.scss";
import ClockContainer from "../Clock/ClockContainer";

const TimeStats = (props) =>
{
    return (
        <div className="TimeStats content-section">
            <ClockContainer />
            <p>Data updates every 30 minutes</p>
        </div>
    );
}

export default TimeStats;