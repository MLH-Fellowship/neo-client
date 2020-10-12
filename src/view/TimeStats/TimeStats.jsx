import React from 'react';

import "./TimeStats.scss";
import ClockContainer from "../Clock/ClockContainer";

const TimeStats = (props) =>
{
    return (
        <div className="TimeStats content-section col-2-of-4">
            <ClockContainer />
            <h2 className="note">Data updates every hour</h2>
        </div>
    );
}

export default TimeStats;