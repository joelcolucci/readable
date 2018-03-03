import * as PostsAPI from '../utilities/PostsAPI';

const POST_CREATED = 'POST_CREATED';


function postCreated(post) {
  return {
    type: POST_CREATED,
    post: post
  };
}

function postCreate(post) {
  return (dispatch) => {
    return PostsAPI
      .create(post)
      .then((post) => {
        dispatch(postCreated(post));
      });
  };
}


export {
  POST_CREATED,
  postCreate
};
