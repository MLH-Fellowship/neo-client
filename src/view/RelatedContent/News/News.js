import React from 'react';
import {connect} from 'react-redux';

import './News.scss';
import {fetchNewsThunk} from '../../../state/thunks';
import Article from './Article/Article';

class News extends React.Component {

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div className='content-section News'>
        <h1 className='section-header'>News</h1>
        {this.props.news.length ? 
          this.props.news.map(article => {
            return (
              <Article article={article} />
            )
          })
        :
          <h2>There are no news available at the moment</h2>
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    news: state.news.news
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchNews: () => dispatch(fetchNewsThunk())
  }
};

export default connect(mapState, mapDispatch)(News);