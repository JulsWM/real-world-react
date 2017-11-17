import React from "react";
import { Link } from "react-router";

const ArticlePreview = ({ article }) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link className="author" to={`@${article.author.username}`}>
          <img src={article.author.image} />
        </Link>
        <div className="info">
          <a className="author">{article.author.username}</a>
          <span className="data">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart" />
            {article.favoritesCount}
          </button>
        </div>
      </div>

      <Link className="preview-link" to={`articles/${article.slug}`}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-last">
          {article.tagList.map(tag => (
            <li className="tag-default tag-pill tag-outline" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
