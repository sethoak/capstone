import React, { Component } from "react";
import "./news.css";

class NewsCard extends Component {
  render() {
    console.log("renderingggg");
    return (
      <div className="newsContainer">
        <div className="articleContainer"></div>
        <p className="sectionTitle">
          <b>
            <u>Title:</u>
          </b>
        </p>
        <p>{this.props.article.title}</p>
        <p className="sectionTitle">
          <b>
            <u>Synopsis:</u>
          </b>
        </p>
        <p>{this.props.article.synopsis}</p>
        <p className="sectionTitle">
          <b>
            <u>URL:</u>
          </b>
        </p>
        <p>{this.props.article.URL}</p>
        <p className="sectionTitle">
          <b>
            <u>Timestamp:</u>
          </b>
        </p>
        <p>{this.props.article.timestamp}</p>
        <div className="newsButtons">
          <button
            type="deleteNewsbutton"
            onClick={() => this.props.deleteArticle(this.props.article.id)}
          >
            Delete
          </button>
          <button
            type="editNewsbutton"
            onClick={() => {
              this.props.history.push(`/news/${this.props.article.id}/edit`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default NewsCard;
