import React from 'react';


function Comment(props) {
  let { comment } = props;
  return (
    <div className="comment">
      <p>{comment.body}</p>
      <p>{comment.author}</p>
    </div>
  );
}

export default Comment;
