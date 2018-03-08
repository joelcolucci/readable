import React from 'react';

import Comment from './Comment.js';
import CommentUpdateForm from './CommentUpdateForm';


function CommentList(props) {
  return (
    <div className="comment-list">
      {props.comments && props.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment comment={comment} />
            <CommentUpdateForm comment={comment} />
          </div>
        );
      })}
    </div>
  );
}


export default CommentList;
