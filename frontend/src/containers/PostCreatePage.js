import React from 'react';

import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import PostCreateForm from '../components/PostCreateForm';


function PostCreatePage(props) {
  return (
    <React.Fragment>
      <Header title="Create a post" />
      <main className="main">
        <div className="post-form-container">
          <h4>Create a post</h4>
          <PostCreateForm categories={props.categories} />
        </div>
        <div className="category-list-container">
          <CategoryList categories={props.categories}/>
        </div>
      </main>
    </React.Fragment>
  );
}


export default PostCreatePage;
