import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postActions';


class PostList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div className="postlist">
        {this.props.posts.map((item) => {
          return (
            <article key={item.id}>
              <h2>{item.title}</h2>
              <p>Written by: {item.author}</p>
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
  };
}


export default connect(mapStateToProps)(PostList);
