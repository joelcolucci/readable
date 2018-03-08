import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { createComment } from '../actions/commentActions';


class CommentCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuid(),
      body: '',
      author: '',
      parentId: props.postId
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();

    let inputName = event.target.name;
    let inputValue = event.target.value;

    this.setState({
      [inputName]: inputValue
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let comment = {
      id: this.state.id,
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      parentId: this.state.parentId
    };

    this.props.dispatch(createComment(comment));
  }

  render() {
    return (
      <form className="comment-create-form" onSubmit={this.handleSubmit}>
        <input
          type="hidden"
          name="id"
          value={this.state.postId} />

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

        <button type="submit">Save</button>
      </form>
    );
  }
}


export default connect()(CommentCreateForm);
