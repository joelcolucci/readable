import React from 'react';

import Comment from './Comment.js';
import CommentUpdateForm from './CommentUpdateForm';
import CommentDeleteButton from './CommentDeleteButton';
import CommentVoteCounter from './CommentVoteCounter';


function CommentList(props) {
  return (
    <div className="comment-list">
      {props.comments && props.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment comment={comment} />
            <CommentVoteCounter commentId={comment.id} voteCount={comment.voteScore} />
            <CommentUpdateForm comment={comment} />
            <CommentDeleteButton commentId={comment.id} />
          </div>
        );
      })}
    </div>
  );
}


export default CommentList;
