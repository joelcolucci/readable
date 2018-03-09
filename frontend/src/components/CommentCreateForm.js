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
      author: ''
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
      parentId: this.props.postId
    };

    this.props.dispatch(createComment(comment));

    this.setState({
      id: uuid(),
      body: '',
      author: ''
    });
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <textarea
          className="textarea"
          type="text"
          name="body"
          placeholder="body"
          value={this.state.body}
          onChange={this.handleInputChange}></textarea>

        <input
          className="input"
          type="text"
          name="author"
          placeholder="author"
          value={this.state.author}
          onChange={this.handleInputChange} />

        <div className="create-form-controls">
          <button type="submit" className="link">Save</button>
        </div>
      </form>
    );
  }
}


export default connect()(CommentCreateForm);
