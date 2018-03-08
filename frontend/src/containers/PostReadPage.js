import React from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post';
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
        <h1>Post Read Page</h1>
        <Post post={this.props} />
      </React.Fragment>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let { postsReducer } = state;
  let post = postsReducer.postsById[ownProps.postId] || {};
  return {
    id: post.id,
    ...post
  };
}


export default connect(mapStateToProps)(PostReadPage);
