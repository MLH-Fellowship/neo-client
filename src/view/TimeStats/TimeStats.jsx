import React from 'react';
import "./TimeStats.scss";

import Clock from "../Clock/Clock";

class TimeStats extends React.Component
{
    render()
    {
        return (
            <div className="TimeStats">
                <Clock />
                <p>Data updates every 30 minutes</p>
            </div>
        );
    }
}

export default TimeStats;