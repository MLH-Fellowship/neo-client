import React from 'react';
import './App.scss';

import CounterContainer from "../Counter/CounterContainer";
import Browse from "../Browse/Browse";

function App()
{
    return (
        <div className="App">
            <header className="App-header">
                <CounterContainer />
                <Browse />
            </header>
        </div>
    );
}

export default App;