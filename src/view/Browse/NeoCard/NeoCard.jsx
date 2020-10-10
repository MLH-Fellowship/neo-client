import React from 'react';

import './NeoCard.scss'

const NeoCard = (props) => {
  let estDiameter = props.details.estimated_diameter; 
  let diameterM = estDiameter.meters.estimated_diameter_max - estDiameter.meters.estimated_diameter_min;
  let diameterF = estDiameter.feet.estimated_diameter_max - estDiameter.feet.estimated_diameter_min;

  return (
    <div className='NeoCard'>
      <div className="contents">
        <div className='col-1-of-3'>
          <img src={process.env.PUBLIC_URL + "/assets/images/asteroid-human.png"} 
            alt="Asteroid with outline of human overlay"
            width="100%" height="100%"/>
        </div>
        <div className='col-2-of-3'>
          <p>Name: {props.details.name}</p>
          <p>ID: {props.details.id}</p>
          <br/>
          <p>Estimated Diameter:</p>
          <p>{diameterM.toFixed(2)}m | {diameterF.toFixed(2)}ft</p>
          <br/>
          <p>Potential Hazard: {props.details.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  )
}

export default NeoCard;