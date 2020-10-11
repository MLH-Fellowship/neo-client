import React from 'react';

import './NeoCard.scss'

const NeoCard = (props) => {
  let neoInfo = props.details;
  let estDiameter = neoInfo.estimated_diameter; 
  let diameterM = (estDiameter.meters.estimated_diameter_max + estDiameter.meters.estimated_diameter_min) / 2;
  let diameterF = (estDiameter.feet.estimated_diameter_max + estDiameter.feet.estimated_diameter_min) / 2;

  return (
    <div className="neo-card">
      <div className='col-1-of-3'>
        <img src={process.env.PUBLIC_URL + "/assets/images/asteroid-human.png"} 
          className="neo-card-photo"
          alt="Asteroid with outline of human overlay"
          width="100%"/>
      </div>
      <div className='col-2-of-3'>
        <div className="neo-card-title">
          <p><strong>Name:</strong> {neoInfo.name}</p>
          <p><strong>ID:</strong> {neoInfo.id}</p>
        </div>
        <br/>
        <div className="neo-card-details">
          <p><strong>Estimated Diameter:</strong></p>
          <p>{diameterM.toFixed(2)}m | {diameterF.toFixed(2)}ft</p>
          <br/>
          <p><strong>Potential Hazard:</strong> {neoInfo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  )
}

export default NeoCard;