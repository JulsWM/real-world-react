import React, { Component } from "react";

import { connect } from "react-redux";
import marked from "marked";

import agent from "../../agent";

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "ARTICLE_PAGE_LOADED", payload })
});

class Aritcle extends Component {
  componentWillMount() {
    const articleId = this.props.params.id;
    this.props.onLoad(
      Promise.all([
        agent.Articles.get(articleId),
        agent.Comments.forArticle(articleId)
      ])
    );
  }
  render() {
    const article = this.props.article;
    if (!article) {
      return null;
    }
    const markup = { _html: marked(article.body) };
    // const canModify =
    //   this.props.currentUser.username === article.author.username;
    return (
      <div className="article-page">
        <div className="banner">
          <div className="contaner">
            <h1>{article.title}</h1>
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div dangerouslySetInnnerHTML={markup} />

              <ul className="tag-list">
                {article.tagline.map(tag => {
                  return (
                    <li className="tag-default tag-pill tag-outline" key={tag}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <hr />

          <div className="article-actions" />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aritcle);
