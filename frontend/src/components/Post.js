import React from 'react';
import { Link } from 'react-router-dom';

import PostDeleteButton from './PostDeleteButton';
import PostVoteCounter from './PostVoteCounter';


function Post(props) {
  let { post } = props;
  return (
    <article>
      <Link to={`/${post.category}/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>Written by: {post.author}</p>
      <p>{post.commentCount} comments</p>
      <PostVoteCounter postId={post.id} voteCount={post.voteScore} />
      <Link to={`/${post.category}/${post.id}/update`}>Edit</Link>
      <PostDeleteButton postId={post.id} />
      <p>{post.body}</p>
    </article>
  );
}


export default Post;
