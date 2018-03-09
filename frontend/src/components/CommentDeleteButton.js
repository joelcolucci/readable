import React from 'react';
import { connect } from 'react-redux';

import { deleteComment } from '../actions/commentActions';


class CommentDeleteButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    let commentId = this.props.commentId;
    let message = 'Are you sure you want to delete this comment?';
    let result = window.confirm(message);
    if (result) {
      this.props.dispatch(deleteComment(commentId));
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className="link">Delete</button>
    );
  }
}


export default connect()(CommentDeleteButton);
