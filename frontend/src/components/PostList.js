import React from 'react';
import { Link } from 'react-router-dom';

import PostDeleteButton from './PostDeleteButton';
import PostVoteCounter from './PostVoteCounter';


class PostList extends React.Component {
  render() {
    return (
      <div className="postlist">
        {this.props.posts.map((item) => {
          return (
            <article key={item.id}>
              <h2>{item.title}</h2>
              <p>Written by: {item.author}</p>
              <Link to={`/posts/${item.id}/update`}>Edit</Link>
              <PostDeleteButton postId={item.id} />
              <PostVoteCounter postId={item.id} voteCount={item.voteScore} />
              <p>{item.body}</p>
            </article>
          );
        })}
      </div>
    );
  }
}


export default PostList;
