import React from 'react';

import './CloseApproachData.scss';

const CloseApproachData = (props) =>
{
    let neoInfo = props.selected;
    let cad = neoInfo ? neoInfo.close_approach_data[0] : null;
    let relVel = cad ? cad.relative_velocity : null;
    let missDist = cad ? cad.miss_distance : null;

    return (
        <div className="CloseApproachData content-section">
            <h2 className='section-header'>Close Approach Data</h2>
            {cad ?
            <>
                <p><strong>Close Approach Date Full:</strong> {cad.close_approach_date_full}</p>
                <p>
                    <strong>Relative Velocity: </strong>
                    {parseFloat(relVel.kilometers_per_second).toLocaleString()} km/s | {parseFloat(relVel.kilometers_per_hour).toLocaleString()} km/h | {parseFloat(relVel.miles_per_hour).toLocaleString()} mph
                </p>
                <p>
                    <strong>Miss Distance: </strong>
                    {parseFloat(missDist.astronomical).toLocaleString()} AU | {parseFloat(missDist.lunar).toLocaleString()} LD | {parseFloat(missDist.kilometers).toLocaleString()} km | {parseFloat(missDist.miles).toLocaleString()} mi
                </p>
                <p><strong>Orbiting Body:</strong> {cad.orbiting_body}</p>
            </>
            :
                <p>There is no close approach data available</p>
            }
        </div>
    )
}

export default CloseApproachData;