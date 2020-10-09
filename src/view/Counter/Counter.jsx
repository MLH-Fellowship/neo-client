import React from "react";

const Counter = (props) =>
{
    return (
        <div>
            <h1 className='card-header'> Counter: {props.counter}</h1>
            <br/>
            <button onClick={() => props.onIncrement()}>+</button>
            <button onClick={() => props.onIncrement(5)}>+ 5</button>
            <button onClick={() => props.onDecrement()}>-</button>
            <button onClick={() => props.onDecrement(5)}>- 5</button>
        </div>
    );
};

export default Counter;