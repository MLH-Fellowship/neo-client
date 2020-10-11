import React from 'react';
import {connect} from 'react-redux';

import './News.scss';
import {fetchNewsThunk} from '../../../state/thunks';

class News extends React.Component {

  componentDidMount() {
    this.props.fetchNews();
    console.log(this.props)
  }

  render() {
    return (
      <div className='News content-section'>
        <h1 className='section-header'>News</h1>
        {this.props.news.length &&
        this.props.news.map(article => {
          return (
            <div>
            <img src={article.featured_image} alt=''/>
            <h3 className='news-headline'>{article.title}</h3>
            </div>
          )
        })
        }

      </div>
    )
  }
}

const mapState = (state) => {
  // console.log(state)
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