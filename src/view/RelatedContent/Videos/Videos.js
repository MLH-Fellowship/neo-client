import React from 'react';

import './Videos.scss';

const Videos = () => {
  return (
    <div className='Videos content-section'>
      <h2 className='section-header'>Videos</h2>
      <div className='content'>
        <iframe src="https://www.youtube.com/embed/y8XvQNt26KI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Unlimited Resources From Space – Asteroid Mining" allowfullscreen></iframe>
        <h3 className='title'>Unlimited Resources From Space – Asteroid Mining</h3>
        <p>Kurzgesagt – In a Nutshell</p>
        <iframe src="https://www.youtube.com/embed/A0FZIwabctw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Falcon Heavy & Starman" allowfullscreen></iframe>
        <h3 className='title'>Falcon Heavy & Starman</h3>
        <p>SpaceX</p>
      </div>
    </div>
  )
}

export default Videos;