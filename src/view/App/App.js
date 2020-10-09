import React from 'react';
import './App.scss';

import CounterContainer from "../Counter/CounterContainer";
import Browse from "../Browse/Browse";
import NeoData from '../NeoData/NeoData';
import RelatedContent from '../RelatedContent/RelatedContent';

function App()
{
    return (
        <div className="App">
            <header className="App-header">
                <CounterContainer />
                <div className="row">
                    <Browse />
                    <NeoData />
                    <RelatedContent />
                </div>
            </header>
        </div>
    );
}

export default App;