import React from 'react';
import { connect } from 'react-redux';

import { readPost } from '../actions/postActions';


class PostReadPage extends React.Component {
  componentDidMount() {
    let postId = this.props.postId;
    if (postId) {
      this.props.dispatch(readPost(postId));
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>Post Read Page</div>
        <h1>{this.props.title}</h1>
        <p>{this.props.author}</p>
        <div>{this.props.body}</div>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let { postsReducer } = state;
  let post = postsReducer.postsById[ownProps.postId] || {};
  return {
    id: post.id,
    title: post.title || '',
    author: post.author || '',
    body: post.body || ''
  };
}


export default connect(mapStateToProps)(PostReadPage);
