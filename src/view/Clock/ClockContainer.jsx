import React, { Component } from "react";
import { connect } from "react-redux";

import { updateTime, updateDate } from "../../state";
import Clock from "./Clock";

class ClockContainer extends Component
{
    componentDidMount()
    {
        this.intervalID = setInterval(() => 
        {
            this.props.updateLocaleTime();
            this.props.updateLocaleDate();
        }, 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.intervalID);
    }

    render()
    {
        return (
            <Clock 
                time={this.props.time}
                date={this.props.date}
            />
        );
    }
}

function mapState(state)
{
    return {
        time: state.clock.currentTime,
        date: state.clock.currentDate
    };
}

function mapDispatch(dispatch)
{
    return {
        updateLocaleTime: () => dispatch(updateTime()),
        updateLocaleDate: () => dispatch(updateDate())
    };
}

export default connect(mapState, mapDispatch)(ClockContainer);