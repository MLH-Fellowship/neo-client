import React from 'react';

import './NeoCard.scss'

const NeoCard = (props) => {
  return (
    <div className='NeoCard'>
      <div className="contents">
        <div className='col-1-of-3'>
          <img src={process.env.PUBLIC_URL + "/assets/images/asteroid-human.png"} 
            alt="Asteroid with outline of human overlay"
            width="100%" height="100%"/>
        </div>
        <div className='col-2-of-3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        {/* ID: {props.details.id}<br />
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
        Potential Hazard: {props.details.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}<br/>
        Sentry Object: {props.details.is_sentry_object ? 'Yes' : 'No'} */}
      </div>
    </div>
  )
}

export default NeoCard;