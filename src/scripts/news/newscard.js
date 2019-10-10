import React, { Component } from "react";

class NewsCard extends Component {
  render() {
      console.log("renderingggg")
    return (
      <div>
        <p>Title:{this.props.article.title}</p>
        <p>URL:{this.props.article.url}</p>
        <p>Timestamp: {this.props.article.timestamp}</p>
        <p>Synopsis: {this.props.article.snynopsis}</p>
        <button
          type="button"
          onClick={() => this.props.deleteArticle(this.props.article.id)}
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.history.push(`/news/${this.props.article.id}/edit`);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default NewsCard;
