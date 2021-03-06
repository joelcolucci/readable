import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { updatePost } from '../actions/postActions';


class PostUpdateForm extends Component {
  constructor(props) {
    super(props);

    // Intentionally forking props to allow for
    // controlled component form values to be set
    // with persisted data
    let { id, title, body, author, category } = props.post || {};

    this.state = {
      postId: id || '',
      title: title || '',
      body: body || '',
      author: author || '',
      category: category || ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // We have to set state in this lifecycle hook
    // to handle when a user loads the form page
    // directly as opposed to navigating through
    // the app
    this.setState({
      postId: uuid(),
      ...nextProps.post
    });
  }

  handleInputChange(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    this.setState({
      [inputName]: inputValue
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let post = {
      id: this.state.postId,
      title: this.state.title,
      body: this.state.body
    };

    this.props.dispatch(updatePost(post));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="post-form">
        <div className="form-group">
          <h4 className="form-group-heading">Content</h4>
          <input
            type="hidden"
            name="id"
            value={this.state.postId}
            onChange={this.handleInputChange} />

          <input
            className="input"
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleInputChange} />

          <textarea
            className="textarea"
            type="text"
            name="body"
            placeholder="body"
            value={this.state.body}
            onChange={this.handleInputChange}></textarea>

          <input
            disabled
            className="input"
            type="text"
            name="author"
            placeholder="author"
            value={this.state.author}
            onChange={this.handleInputChange} />
        </div>

        <div className="form-group">
          <h4 className="form-group-heading">Category</h4>
          <input
            disabled
            className="input"
            type="text"
            name="category"
            placeholder="category"
            value={this.state.category}
            onChange={this.handleInputChange} />
        </div>

        <div className="post-form-controls">
          <button type="submit" className="link">Save</button>
        </div>
      </form>
    );
  }
}


export default connect()(PostUpdateForm);
