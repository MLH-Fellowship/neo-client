import React from 'react';
import './App.scss';

import TimeStats from "../TimeStats/TimeStats";
import Browse from "../Browse/Browse";
import NeoData from '../NeoData/NeoData';
import RelatedContent from '../RelatedContent/RelatedContent';

function App()
{
    return (
        <div className="App">
            <div className="row">
                <TimeStats />
            </div>
            <div className="row">
                <Browse />
                <NeoData />
                <RelatedContent />
            </div>
        </div>
    );
}

export default App;