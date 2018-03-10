import React from 'react';
import { connect } from 'react-redux';

import { readPost } from '../actions/postActions';

import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import PostUpdateForm from '../components/PostUpdateForm';


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
        <Header title="Update post"/>
        <main className="main">
          <div className="post-form-container">
            <h4>Update post</h4>
            <PostUpdateForm post={this.props} />
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
  let { postsReducer } = state;
  let post = postsReducer.postsById[ownProps.postId] || {};
  return {
    id: post.id,
    title: post.title || '',
    author: post.author || '',
    body: post.body || '',
    category: post.category || ''
  };
}


export default connect(mapStateToProps)(PostUpdatePage);
