import React from 'react';

import Comment from './Comment.js';


function CommentList(props) {
  return (
    <div className="comment-list">
      {props.comments && props.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}


export default CommentList;
