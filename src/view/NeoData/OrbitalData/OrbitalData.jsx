import React from 'react';

import './OrbitalData.scss';

const OrbitalData = (props) =>
{
    let neoInfo = props.selected;
    let od = neoInfo ? neoInfo.orbital_data : null;
    let orbitID = od ? od.orbit_id : null;
    let firstObserveDate = od ? od.first_observation_date : null;
    let lastObserveDate = od ? od.last_observation_date : null;
    let orbitDeterminationDate = od ? od.orbit_determination_date : null;
    let observesUsed = od ? od.observations_used : null;
    let dataArcInDays = od ? od.data_arc_in_days : null;
    let orbitUncertainty = od ? od.orbit_uncertainty : null;
    let minOrbitIntersect = od ? od.minimum_orbit_intersection : null;
    let jupiterTissInvar = od ? od.jupiter_tisserand_invariant : null;
    let epochOsc = od ? od.epoch_osculation : null;
    let eccentricity = od ? od.eccentricity : null;
    let semiMajorAxis = od ? od.semi_major_axis : null;
    let inclination = od ? od.inclination : null;
    let ascNodeLong = od ? od.ascending_node_longitude : null;
    let orbitPeriod = od ? od.orbital_period : null;
    let periDist = od ? od.perihelion_distance : null;
    let periArg = od ? od.perihelion_argument : null;
    let apDist = od ? od.aphelion_distance : null;
    let periTime = od ? od.perihelion_time : null;
    let meanAnomaly = od ? od.mean_anomaly : null;
    let meanMotion = od ? od.mean_motion : null;
    let equinox = od ? od.equinox : null;
    let orbitClassType = od ? od.orbit_class.orbit_class_type : null;
    let orbitClassRange = od ? od.orbit_class.orbit_class_range : null;
    let orbitClassDescription = od ? od.orbit_class.orbit_class_description : null;

    return (
        <div className="OrbitalData content-section">
            <h2 className='section-header'>Orbital Data</h2>
            {od ?
            <>
                <ul>
                    <li>
                        <div className='col-1-of-2 left'><strong>Orbit ID: </strong></div>
                        <div className='col-1-of-2 right'>{orbitID}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong>First Observation Date: </strong></div>
                        <div className='col-1-of-2 right'>{firstObserveDate}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong>Last Observation Date: </strong></div>
                        <div className='col-1-of-2 right'>{lastObserveDate}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong>Orbit Determination Date: </strong></div>
                        <div className='col-1-of-2 right'>{orbitDeterminationDate}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong>Data Arc in Days: </strong></div>
                        <div className='col-1-of-2 right'>{dataArcInDays}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong>Observations Used: </strong></div>
                        <div className='col-1-of-2 right'>{observesUsed}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Uncertainty_parameter" target="_blank" rel="noopener noreferrer">Orbit Uncertainty</a>: </strong></div>
                        <div className='col-1-of-2 right'>{orbitUncertainty}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Minimum_orbit_intersection_distance" target="_blank" rel="noopener noreferrer">Minimum Orbit Intersection</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(minOrbitIntersect).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Tisserand%27s_parameter" target="_blank" rel="noopener noreferrer">Jupiter Tisserand Invariant</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(jupiterTissInvar).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Osculating_orbit" target="_blank" rel="noopener noreferrer">Epoch Osculation</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(epochOsc).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Orbital_eccentricity" target="_blank" rel="noopener noreferrer">Eccentricity</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(eccentricity).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Semi-major_and_semi-minor_axes#Astronomy" target="_blank" rel="noopener noreferrer">Semi Major Axis</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(semiMajorAxis).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Orbital_inclination" target="_blank" rel="noopener noreferrer">Inclination</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(inclination).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Orbital_node" target="_blank" rel="noopener noreferrer">Ascending Node Longitude</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(ascNodeLong).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Orbital_period" target="_blank" rel="noopener noreferrer">Orbital Period</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(orbitPeriod).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Apsis#Perihelion_and_aphelion" target="_blank" rel="noopener noreferrer">Perihelion Distance</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(periDist).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Argument_of_periapsis" target="_blank" rel="noopener noreferrer">Perihelion Argument</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(periArg).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Apsis#Perihelion_and_aphelion" target="_blank" rel="noopener noreferrer">Aphelion Distance</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(apDist).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Apsis#Time_of_perihelion" target="_blank" rel="noopener noreferrer">Perihelion Time</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(periTime).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Mean_anomaly" target="_blank" rel="noopener noreferrer">Mean Anomaly</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(meanAnomaly).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Mean_motion" target="_blank" rel="noopener noreferrer">Mean Motion</a>: </strong></div>
                        <div className='col-1-of-2 right'>{parseFloat(meanMotion).toLocaleString()}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://en.wikipedia.org/wiki/Equinox_(celestial_coordinates)" target="_blank" rel="noopener noreferrer">Equinox</a>: </strong></div>
                        <div className='col-1-of-2 right'>{equinox}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong><a href="https://pdssbn.astro.umd.edu/data_other/objclass.shtml" target="_blank" rel="noopener noreferrer">Orbit Class Type</a>: </strong></div>
                        <div className='col-1-of-2 right'>{orbitClassType}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong>Orbit Class Range: </strong></div>
                        <div className='col-1-of-2 right'>{orbitClassRange}</div>
                    </li>
                    <li>
                        <div className='col-1-of-2 left'><strong>Orbit Class Description: </strong></div>
                        <div className='col-1-of-2 right'>{orbitClassDescription}</div>
                    </li>
                </ul>
            </>
            :
                <p>There is no orbital data available</p>
            }
        </div>
    )
}

export default OrbitalData;