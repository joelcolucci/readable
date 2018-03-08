import React from 'react';
import { connect } from 'react-redux';

import { readAllPosts } from '../actions/postActions';

import PostList from '../components/PostList';


class CategoryPostsPage extends React.Component {
  componentDidMount() {
    let { category } = this.props;
    this.props.dispatch(readAllPosts(category));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      let { category } = nextProps;
      this.props.dispatch(readAllPosts(category));
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Posts by category</h2>
        <PostList posts={this.props.posts} />
      </React.Fragment>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let { postsReducer } = state;
  return {
    posts: Object.keys(postsReducer.postsById).map((key) => {
      return {...postsReducer.postsById[key]};
    })
    .filter((elem) => elem.deleted === false)
  };
}


export default connect(mapStateToProps)(CategoryPostsPage);
