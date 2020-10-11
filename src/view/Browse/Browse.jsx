import React from 'react';

import './Browse.scss';
import NeoCardContainer from './NeoCard/NeoCardContainer';

const Browse = (props) =>
{
    return (
        <div className='Browse content-section col-1-of-4'>
            <h1 className='content-section-header'>Browse</h1>
            {Array.isArray(props.neos) && props.neos.length ?
                props.neos.map(neo => 
                {
                    return (
                        <NeoCardContainer key={neo.id} details={neo} />
                    );
                })
            :
                <h2>There are no Near-Earth Objects available at the moment</h2>
            }
        </div>
    );
}

export default Browse;