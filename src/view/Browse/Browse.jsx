import React from 'react';
import axios from 'axios';

import './Browse.scss';
import NeoDetail from './NeoDetail/NeoDetail';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neos: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const {data} = await axios.get(`/api/browse`)
    console.log(data)
    this.setState({
      neos: [...data.neodata.near_earth_objects]
    })
  }

  handleClick(event) {
    event.target.expanded = !event.target.expanded
  }

  render() {
    return (
      <div className='Browse card col-1-of-4'>
        <h1 className='card-header'>Browse</h1>
        {this.state.neos.map(neo => {
          return (
          <div key={neo.id}>
            <button key={neo.id} className='collapsible' expanded={false} onClick={this.handleClick}>
              {neo.name}
            </button>
            <NeoDetail details={neo} />
          </div>
        )})}
      </div>
    )
  }
}

export default Browse;