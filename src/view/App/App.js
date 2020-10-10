import React from 'react';
import './App.scss';

import TimeStats from "../TimeStats/TimeStats";
import BrowseContainer from "../Browse/BrowseContainer";
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
                <BrowseContainer />
                <NeoData />
                <RelatedContent />
            </div>
        </div>
    );
}

export default App;