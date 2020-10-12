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
                <div className='header col-1-of-4'>
                    <h1 className='name'>NEO Dashboard</h1>
                </div>
                <TimeStats />
                <div className='header col-1-of-4'>
                    {/* <img src={process.env.PUBLIC_URL + `/assets/images/owl-logo-white.png`} alt="Optimize Owls logo" className='logo owl col-1-of-2' /> */}
                    <img src={process.env.PUBLIC_URL + `/assets/images/nasa-logo.png`} alt="Optimize Owls logo" className='logo nasa' />
                </div>
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