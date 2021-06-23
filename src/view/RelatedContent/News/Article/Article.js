import React from 'react';

import './Article.scss';

const date = publishedDate => {
  return publishedDate.split('T')[0];
}

const Article = (props) => {
  return (
    <div className='Article'>
      <a href={props.article.url}>
        <img src={props.article.imageUrl} alt=''/>
        <h3 className='title'>{props.article.title}</h3>
        <p>{props.article.newsSite}   |   {date(props.article.publishedAt)}</p>
      </a>
    </div>
  )
}

export default Article;