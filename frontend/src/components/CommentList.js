import React from 'react';

import Comment from './Comment.js';


function CommentList(props) {
  return (
    <div className="comment-list">
      {props.comments && props.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment comment={comment} />
          </div>
        );
      })}
    </div>
  );
}


export default CommentList;
