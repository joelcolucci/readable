import React from 'react';

import PostCreateForm from '../components/PostCreateForm';


function PostCreatePage(props) {
  return (
    <React.Fragment>
      <h2>Posts editor</h2>
      <PostCreateForm categories={props.categories} />
    </React.Fragment>
  );
}


export default PostCreatePage;
