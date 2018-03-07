import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { createPost } from '../actions/postActions';


class PostForm extends Component {
  constructor(props) {
    super(props);

    // Intentionally forking props to allow for
    // controlled component form values to be set
    // with persisted data
    let { id, title, body, author } = props.post || {};

    this.state = {
      postId: id || uuid(),
      title: title || '',
      body: body || '',
      author: author || ''
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
      author: this.state.author,
      body: this.state.body
    };

    this.setState({
      id: '',
      title: '',
      body: '',
      author: ''
    });

    this.props.dispatch(createPost(post));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="hidden"
          name="id"
          value={this.state.postId}
          onChange={this.handleInputChange} />

        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleInputChange} />

        <input
          type="text"
          name="body"
          placeholder="body"
          value={this.state.body}
          onChange={this.handleInputChange} />

        <input
          type="text"
          name="author"
          placeholder="author"
          value={this.state.author}
          onChange={this.handleInputChange} />

        <select>
          <option>TODO: Categories</option>
        </select>

        <button type="submit">Save</button>
      </form>
    );
  }
}


export default connect()(PostForm);
