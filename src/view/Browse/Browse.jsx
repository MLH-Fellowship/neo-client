import React from 'react';

import './Browse.scss';
import NeoCard from './NeoCard/NeoCard';

const Browse = (props) =>
{
    return (
        <div className='Browse content-section col-1-of-4'>
            <h1 className='content-section-header'>Browse</h1>
            {props.neos ?
            props.neos.map(neo => 
            {
                return (
                    <NeoCard key={neo.id} details={neo} />
                );
            })
            :
            <h5>Loading...</h5>
            }
            
        </div>
    );
}

export default Browse;