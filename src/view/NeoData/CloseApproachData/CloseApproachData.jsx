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
                {/* <p><span className='left'><strong>Close Approach Date Full:</strong></span> <span className='right'>{cad.close_approach_date_full}</span></p>
                <p>
                <div className='col-1-of-2 left'><strong>Relative Velocity: </strong></div>
                <div className='col-1-of-2 right'>{parseFloat(relVel.kilometers_per_second).toLocaleString()} km/s | {parseFloat(relVel.kilometers_per_hour).toLocaleString()} km/h | {parseFloat(relVel.miles_per_hour).toLocaleString()} mph</div>
                </p>
                <p>
                    <div className='col-1-of-2 left'><strong>Miss Distance: </strong></div>
                    <div className='col-1-of-2 right'>{parseFloat(missDist.astronomical).toLocaleString()} AU | {parseFloat(missDist.lunar).toLocaleString()} LD | {parseFloat(missDist.kilometers).toLocaleString()} km | {parseFloat(missDist.miles).toLocaleString()} mi</div>
                </p>
                <p><div className='col-1-of-2 left'><strong>Orbiting Body:</strong></div> <div className='col-1-of-2 right'>{cad.orbiting_body}</div></p> */}
            </>
            :
                <p>There is no close approach data available</p>
            }
        </div>
    )
}

export default CloseApproachData;