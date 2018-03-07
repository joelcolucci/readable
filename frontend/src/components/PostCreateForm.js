import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { createPost } from '../actions/postActions';


class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: uuid(),
      title: '',
      body: '',
      author: '',
      category: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      timestamp: Date.now(),
      title: this.state.title,
      author: this.state.author,
      body: this.state.body,
      category: this.state.category
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
