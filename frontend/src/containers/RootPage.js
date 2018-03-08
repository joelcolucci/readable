import React from 'react';
import { connect } from 'react-redux';

import { readAllPosts } from '../actions/postActions';

import PostList from '../components/PostList';


class RootPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(readAllPosts());
  }

  render() {
    return (
      <div className="RootPage">
        <h2>Most recent posts</h2>
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  let { postsReducer } = state;
  return {
    posts: Object.keys(postsReducer.postsById).map((key) => {
      return {...postsReducer.postsById[key]};
    })
    .filter((elem) => elem.deleted === false)
  };
}


export default connect(mapStateToProps)(RootPage);
