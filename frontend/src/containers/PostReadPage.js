import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
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
    if (!this.props.post.id) {
      return (
        <React.Fragment>
          <Header />
          <main className="main page-404">
            <h1>404</h1>
            <Link className="link" to="/">Return to home page</Link>
          </main>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Header />
        <main className="main page-post-read">

          <div className="post-container">
            <Post post={this.props.post} />
            <h3>Comments</h3>
            <CommentList comments={this.props.comments} />
            <h3>New Comment</h3>
            <CommentCreateForm postId={this.props.post.id} />
          </div>
          <div className="category-list-container">
            <CategoryList categories={this.props.categories}/>
          </div>

        </main>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let { commentReducer, postsReducer } = state;

  let comments = commentReducer.comments.filter((value) => value.deleted === false && value.parentDeleted === false);
  let post = postsReducer.postsById[ownProps.postId] || {};

  // Update commentCount to ensure accurate # as comments are added/deleted
  if (comments.length !== post.commentCount) {
    post.commentCount = comments.length;
  }

  return {
    id: post.id,
    post: post,
    comments: comments.sort((a, b) => a.timestamp < b.timestamp)
  };
}


export default connect(mapStateToProps)(PostReadPage);
