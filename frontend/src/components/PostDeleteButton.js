import React from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../actions/postActions';


class PostDeleteButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    let postId = this.props.postId;
    let message = 'Are you sure you want to delete this post?';
    let result = window.confirm(message);
    if (result) {
      this.props.dispatch(deletePost(postId));
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className="link">Delete</button>
    );
  }
}


export default connect()(PostDeleteButton);
