import React from 'react';

import './Article.scss';

const date = publishedDate => {
  return publishedDate.split('T')[0];
}

const Article = (props) => {
  return (
    <div className='Article'>
      <a href={props.article.url}>
        <img src={props.article.featured_image} alt=''/>
        <h3 className='news-headline'>{props.article.title}</h3>
        <p>{props.article.news_site_long}   |   {date(props.article.published_date)}
        </p>
      </a>
    </div>
  )
}

export default Article;