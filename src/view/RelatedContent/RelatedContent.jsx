import React from 'react';

import './RelatedContent.scss';
import News from './News/News';

class RelatedContent extends React.Component {
  render() {
    return (
      <div className="RelatedContent content-section col-1-of-4">
        <h1 className='content-section-header'>Related Content</h1>
        <News />
      </div>
    )
  }
}

export default RelatedContent;