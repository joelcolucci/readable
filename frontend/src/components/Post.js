import React from 'react';
import { Link } from 'react-router-dom';

import TimeAgo from 'react-timeago';

import PostDeleteButton from './PostDeleteButton';
import PostVoteCounter from './PostVoteCounter';


function Post(props) {
  let { post } = props;
  return (
    <article className="post">
      <div className="post-flex">
        <div className="post-vote-counter">
          <PostVoteCounter
            postId={post.id}
            voteCount={post.voteScore} />
        </div>
        <div>
          <Link className="link" to={`/${post.category}/${post.id}`}>
            <h2 className="post-title">{post.title}</h2>
          </Link>

          <p className="post-sub-title">Submitted <TimeAgo date={post.timestamp} live={false} /> by {post.author}</p>

          <p className="post-body">{post.body}</p>

          <p className="post-comment-count">{post.commentCount} comments</p>
        </div>
      </div>
      <div className="post-controls">
        <Link className="link" to={`/${post.category}/${post.id}/update`}>Edit</Link>
        <PostDeleteButton postId={post.id} />
      </div>
    </article>
  );
}


export default Post;
