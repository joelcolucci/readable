import React from 'react';

import Post from './Post';


function PostList(props) {
  return (
    <div className="postlist">
      {props.posts.map((post) => {
        return (
          <Post key={post.id} post={post} />
        );
      })}
    </div>
  );
}


export default PostList;
