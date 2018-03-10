import React from 'react';
import { connect } from 'react-redux';

import { updateComment } from '../actions/commentActions';


class CommentUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    let { comment } = props;

    this.state = {
      body: comment.body,
      id: comment.id
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
      body: this.state.body
    };

    this.props.dispatch(updateComment(comment));
  }

  render() {
    return (
      <form className="comment-update-form" onSubmit={this.handleSubmit}>
        <input
          type="hidden"
          name="id"
          value={this.state.postId} />

        <input
          className="input"
          type="text"
          name="body"
          placeholder="body"
          value={this.state.body}
          onChange={this.handleInputChange} />

        <button type="submit" className="link">Save</button>
      </form>
    );
  }
}


export default connect()(CommentUpdateForm);
