import React from 'react';

import TimeAgo from 'react-timeago';
import CommentVoteCounter from './CommentVoteCounter';
import CommentDeleteButton from './CommentDeleteButton';


function Comment(props) {
  let { comment } = props;
  return (
    <div className="comment">
      <div className="comment-flex">
        <div className="comment-vote-counter">
          <CommentVoteCounter commentId={comment.id} voteCount={comment.voteScore} />
        </div>
        <div>
          <p className="comment-body">{comment.body}</p>  
        </div>
      </div>
      <div className="comment-meta">
        <p className="comment-sub-title">Submitted <TimeAgo date={comment.timestamp} live={false} /> by {comment.author}</p>
      </div>
      <div className="comment-controls">
        <CommentDeleteButton commentId={comment.id} />
      </div>
    </div>
  );
}

export default Comment;
