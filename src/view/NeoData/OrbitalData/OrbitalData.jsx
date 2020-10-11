import React from 'react';

import './OrbitalData.scss';

const OrbitalData = (props) =>
{
    let neoInfo = props.selected;
    let od = neoInfo ? neoInfo.orbital_data : null;
    let orbitID = od ? od.orbit_id : null;
    let firstObserveDate = od ? od.first_observation_date : null;
    let lastObserveDate = od ? od.last_observation_date : null;
    let orbitObserveDate = od ? od.orbit_observation_date : null;
    let observesUsed = od ? od.observations_used : null;
    let dataArcInDays = od ? od.data_arc_in_days : null;
    let orbitUncertainty = od ? od.orbit_uncertainty : null;
    let minOrbitIntersect = od ? od.minimum_orbit_intersection : null;
    let jupiterTissInvar = od ? od.jupiter_tisserand_invariant : null;
    let epochOsc = od ? od.epoch_osculation : null;
    let eccentricity = od ? od.eccentricity : null;
    let semiMajorAxis = od ? od.semiMajorAxis : null;
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
                <p><strong>Orbit ID: </strong>{orbitID}</p>
                <p><strong>First Observation Date: </strong>{firstObserveDate}</p>
                <p><strong>Last Observation Date: </strong>{lastObserveDate}</p>
                <p><strong>Orbit Observation Date: </strong>{orbitObserveDate}</p>
                <p><strong>Data Arc in Days: </strong>{dataArcInDays}</p>
                <p><strong>Observations Used: </strong>{observesUsed}</p>
                <p><strong>Orbit Uncertainty: </strong>{orbitUncertainty}</p>
                <p><strong>Minimum Orbit Intersection: </strong>{parseFloat(minOrbitIntersect).toLocaleString()}</p>
                <p><strong>Jupiter Tisserand Invariant: </strong>{parseFloat(jupiterTissInvar).toLocaleString()}</p>
                <p><strong>Epoch Osculation: </strong>{parseFloat(epochOsc).toLocaleString()}</p>
                <p><strong>Eccentricity: </strong>{parseFloat(eccentricity).toLocaleString()}</p>
                <p><strong>Semi Major Axis: </strong>{parseFloat(semiMajorAxis).toLocaleString()}</p>
                <p><strong>Inclination: </strong>{parseFloat(inclination).toLocaleString()}</p>
                <p><strong>Ascending Node Longitude: </strong>{parseFloat(ascNodeLong).toLocaleString()}</p>
                <p><strong>Orbital Period: </strong>{parseFloat(orbitPeriod).toLocaleString()}</p>
                <p><strong>Perihelion Distance: </strong>{parseFloat(periDist).toLocaleString()}</p>
                <p><strong>Perihelion Argument: </strong>{parseFloat(periArg).toLocaleString()}</p>
                <p><strong>Aphelion Distance: </strong>{parseFloat(apDist).toLocaleString()}</p>
                <p><strong>Perihelion Time: </strong>{parseFloat(periTime).toLocaleString()}</p>
                <p><strong>Mean Anomaly: </strong>{parseFloat(meanAnomaly).toLocaleString()}</p>
                <p><strong>Mean Motion: </strong>{parseFloat(meanMotion).toLocaleString()}</p>
                <p><strong>Equinox: </strong>{equinox}</p>
                <p><strong>Orbit Class Type: </strong>{orbitClassType}</p>
                <p><strong>Orbit Class Range: </strong>{orbitClassRange}</p>
                <p><strong>Orbit Class Description: </strong>{orbitClassDescription}</p>
            </>
            :
                <p>There is no orbital data available</p>
            }
        </div>
    )
}

export default OrbitalData;