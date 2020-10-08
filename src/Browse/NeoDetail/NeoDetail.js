import React from 'react';

import './NeoDetail.css'

const NeoDetail = (props) => {
  return (
    <div className='NeoDetail'>
      <div className="contents">
        ID: {props.details.id}<br />
        {props.details.designation}<br />
        <a href={props.details.nasa_jpl_url}>More Info</a><br />
        {props.details.absolute_magnitude_h}<br />
        Estimated Diameter:<br />
        Kilometers:<br/>
        Minimum: {props.details.estimated_diameter.kilometers.estimated_diameter_min} km<br/>
        Maximum: {props.details.estimated_diameter.kilometers.estimated_diameter_max} km<br/>
        Meters:<br/>
        Minimum: {props.details.estimated_diameter.meters.estimated_diameter_min} m<br/>
        Maximum: {props.details.estimated_diameter.meters.estimated_diameter_max} m<br/>
        Miles:<br/>
        Minimum: {props.details.estimated_diameter.miles.estimated_diameter_min} mi<br/>
        Maximum: {props.details.estimated_diameter.miles.estimated_diameter_max} mi<br/>
        Feet:<br/>
        Minimum: {props.details.estimated_diameter.feet.estimated_diameter_min} ft<br/>
        Maximum: {props.details.estimated_diameter.feet.estimated_diameter_max} ft<br/>

        Potential Hazard: {props.details.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
        Sentry Object: {props.details.is_sentry_object ? 'Yes' : 'No'}
      </div>
    </div>
  )
}

export default NeoDetail;