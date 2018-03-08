import React from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post';
import CommentList from '../components/CommentList';
import CommentCreateForm from '../components/CommentCreateForm';

import { readPost } from '../actions/postActions';
import { readCommentsForPost } from '../actions/commentActions';

class PostReadPage extends React.Component {
  componentDidMount() {
    let postId = this.props.postId;
    if (postId) {
      this.props.dispatch(readPost(postId));
      this.props.dispatch(readCommentsForPost(postId));
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Post Read Page</h1>
        <Post post={this.props} />
        <h3>Comments</h3>
        <CommentList comments={this.props.comments} />
        <h3>New Comment</h3>
        <CommentCreateForm postId={this.props.id} />
      </React.Fragment>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let { postsReducer } = state;
  let post = postsReducer.postsById[ownProps.postId] || {};
  return {
    id: post.id,
    ...post,
    comments: state.commentReducer.comments.filter((value) => value.deleted === false)
  };
}


export default connect(mapStateToProps)(PostReadPage);
