const CREATE_POST = 'CREATE_POST';


function createPost(post) {
  return {
    type: CREATE_POST,
    post: post
  };
}


export {
  CREATE_POST,
  createPost
};
