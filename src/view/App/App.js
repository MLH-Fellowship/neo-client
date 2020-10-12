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
                <div className='col-1-of-3'>
                    <h1>NEO Dashboard</h1>
                </div>
                <TimeStats />
                <div className='col-1-of-3'>
                    <h1>NEO Dashboard</h1>
                </div>

            </div>
            <div className="row">
                <div className='col-1-of-4'>
                    <button className='tab'>Tab1</button>
                    <button className='tab'>Tab2</button>
                </div>
                <button className='col-2-of-4 hidden'>NEO Data Tabs</button>
                <button className='col-1-of-4 hidden'>Related Content Tabs</button>
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