import React from "react";

const ArticleList = props => {
  if (!props.articles) {
    return <div className="article-preview">loading...</div>;
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No Articles are here....Please come back later.
      </div>
    );
  }
  return (
    <div>
      {props.articles.map(article => {
        return <h2>{article.title}</h2>;
      })}
    </div>
  );
};

export default ArticleList;
