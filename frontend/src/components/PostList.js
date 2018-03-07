import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { readAllPosts } from '../actions/postActions';

import PostDeleteButton from './PostDeleteButton';


class PostList extends React.Component {
  componentDidMount() {
    this.props.dispatch(readAllPosts());
  }

  render() {
    return (
      <div className="postlist">
        {this.props.posts.map((item) => {
          return (
            <article key={item.id}>
              <h2>{item.title}</h2>
              <p>Written by: {item.author}</p>
              <Link to={`/posts/${item.id}`}>Edit</Link>
              <PostDeleteButton postId={item.id} />
              <p>{item.body}</p>
            </article>
          );
        })}
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


export default connect(mapStateToProps)(PostList);
