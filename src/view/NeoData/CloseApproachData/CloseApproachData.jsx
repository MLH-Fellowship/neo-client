import React from 'react';

import './CloseApproachData.scss';

const CloseApproachData = (props) =>
{
    return (
        <div className="CloseApproachData content-section">
            <h2 className='section-header'>Close Approach Data</h2>
            {props.selected ?
            <div className='content'>
                {closeApproach(props.selected)}
            </div>
            :
                <p>There is no close approach data available</p>
            }
        </div>
    )
}

function closeApproach(neoInfo)
{
    let templateList = [];

    neoInfo.close_approach_data.forEach((cad, index) =>
    {
        let relVel = cad ? cad.relative_velocity : null;
        let missDist = cad ? cad.miss_distance : null;

        templateList.push(template(cad, relVel, missDist));
    });

    return templateList;
}

const template = (cad, relVel, missDist) => 
{
    return (
        <>
            <ul>
                <li>
                    <div className='col-1-of-2 left'><strong>Close Approach Date Full:</strong></div>
                    <div className='col-1-of-2 right'>{cad.close_approach_date_full}</div>
                    </li>
                <li>
                    <div className='col-1-of-2 left'><strong>Relative Velocity: </strong></div>
                    <div className='col-1-of-2 right'>{parseFloat(relVel.kilometers_per_second).toLocaleString()} km/s | {parseFloat(relVel.kilometers_per_hour).toLocaleString()} km/h | {parseFloat(relVel.miles_per_hour).toLocaleString()} mph</div>
                </li>
                <li>
                    <div className='col-1-of-2 left'><strong>Miss Distance: </strong></div>
                    <div className='col-1-of-2 right'>{parseFloat(missDist.astronomical).toLocaleString()} AU | {parseFloat(missDist.lunar).toLocaleString()} LD | {parseFloat(missDist.kilometers).toLocaleString()} km | {parseFloat(missDist.miles).toLocaleString()} mi</div>
                </li>
                <li>
                    <div className='col-1-of-2 left'><strong>Orbiting Body:</strong></div>
                    <div className='col-1-of-2 right'>{cad.orbiting_body}</div>
                </li>
            </ul>
            <br/>
        </>
    );   
}
    

export default CloseApproachData;