import React from 'react';
import { connect } from 'react-redux';

import PostForm from '../components/PostForm';
import { readPost } from '../actions/postActions';


class PostUpdatePage extends React.Component {
  componentDidMount() {
    let postId = this.props.postId;
    if (postId) {
      this.props.dispatch(readPost(postId));
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Post Update Page</h2>
        <PostForm post={this.props} />
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


export default connect(mapStateToProps)(PostUpdatePage);
