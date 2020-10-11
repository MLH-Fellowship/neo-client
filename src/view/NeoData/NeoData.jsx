import React from 'react';

import './NeoData.scss';
import './CloseApproachData/CloseApproachData';
import './OrbitalData/OrbitalData';
import CloseApproachDataContainer from './CloseApproachData/CloseApproachDataContainer';
import OrbitalData from './OrbitalData/OrbitalData';

class NeoData extends React.Component {
  render() {
    return (
      <div className="NeoData content-section col-2-of-4">
        <h1 className='content-section-header'>NEO Data</h1>
        <CloseApproachDataContainer />
        <OrbitalData />
      </div>
    )
  }
}

export default NeoData;