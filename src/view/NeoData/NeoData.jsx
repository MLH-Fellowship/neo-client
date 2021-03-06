import React from 'react';

import './NeoData.scss';
import './CloseApproachData/CloseApproachData';
import './OrbitalData/OrbitalData';
import CloseApproachDataContainer from './CloseApproachData/CloseApproachDataContainer';
import OrbitalDataContainer from './OrbitalData/OrbitalDataContainer';

class NeoData extends React.Component {
  render() {
    return (
      <div className="NeoData content-section col-2-of-4">
        <h1 className='content-section-header'>Near Earth Object (NEO) Data</h1>
        <OrbitalDataContainer />
        <CloseApproachDataContainer />
      </div>
    )
  }
}

export default NeoData;