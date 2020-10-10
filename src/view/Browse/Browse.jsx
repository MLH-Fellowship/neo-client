import React from 'react';
import axios from 'axios';

import './Browse.scss';
import NeoCard from './NeoCard/NeoCard';

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
      <div className='Browse content-section col-1-of-4'>
        <h1 className='content-section-header'>Browse</h1>
        {this.state.neos.map(neo => {
          return (
            <NeoCard key={neo.id} details={neo} />
        )})}
      </div>
    )
  }
}

export default Browse;