import React from 'react';

import './NeoCard.scss'

const sizeComparison = {
  2: 'human',
  6: 'human-3',
  10: 'human-5',
  15: 'bus',
  45: 'bus-3',
  50: 'plane',
  75: 'bus-5',
  150: 'plane-3',
  250: 'plane-5',
};

const sizes = Object.keys(sizeComparison);

const thumbnail = (diameterM) => {
  let diameter = Math.ceil(diameterM);
  let i = 0;
  while (diameter > sizes[i] && i <= sizes.length-1) {
    i++;
  }
  return sizeComparison[sizes[i]];
};

const NeoCard = (props) => {
  let estDiameter = props.details.estimated_diameter; 
  let diameterM = estDiameter.meters.estimated_diameter_max - estDiameter.meters.estimated_diameter_min;
  let diameterF = estDiameter.feet.estimated_diameter_max - estDiameter.feet.estimated_diameter_min;

  return (
    <div className='NeoCard'>
      <div className="contents">
        <div className='col-1-of-3'>
          <img src={process.env.PUBLIC_URL + `/assets/images/asteroid-${thumbnail(diameterM)}-192.png`} 
            alt="Asteroid with size comparison overlay"
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