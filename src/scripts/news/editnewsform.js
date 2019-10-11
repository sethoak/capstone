import React, { Component } from "react";
import APIManager from "../../modules/apimanager";

class NewsEditForm extends Component {
  state = {
    title: "",
    synopsis: "",
    URL: "",
    timestamp: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingArticle = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const timestamp = new Date().toLocaleString();
    const editedArticle = {
      id: this.props.match.params.articleId,
      title: this.state.title,
      synopsis: this.state.synopsis,
      URL: this.state.URL,
      timestamp: timestamp
    };

    APIManager.put("articles", editedArticle).then(() =>
      this.props.history.push("/news")
    );
  };

  componentDidMount() {
    APIManager.get("articles", this.props.match.params.articleId).then(
      article => {
        this.setState({
          title: article.title,
          synopsis: article.synopsis,
          URL: article.URL,
          date: article.date,
          loadingStatus: false
        });
      }
    );
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />

              <label htmlFor="synopsis">Synopsis</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="synopsis"
                value={this.state.synopsis}
              />

              <label htmlFor="URL">URL</label>
              <input
                type="URL"
                required
                onChange={this.handleFieldChange}
                id="URL"
                value={this.state.URL}
              />
            </div>
            <div>
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingArticle}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default NewsEditForm;
