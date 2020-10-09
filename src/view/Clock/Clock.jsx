import React from 'react';

class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(undefined,
            {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
        };
    }

    componentDidMount()
    {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.intervalID);
    }

    tick()
    {
        this.setState(
        {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(undefined,
            {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
        });
    }

    render()
    {
        return (
            <>
                <h3>{this.state.time}</h3>
                <h5>{this.state.date}</h5>
            </>
        );
    }
}

export default Clock;