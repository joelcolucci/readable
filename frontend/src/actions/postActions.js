import * as PostAPI from '../utilities/PostAPI';

const POST_CREATED = 'POST_CREATED';
const POSTS_RECEIVE = 'POSTS_RECEIVE';


function postCreated(post) {
  return {
    type: POST_CREATED,
    post: post
  };
}

function postCreate(post) {
  return (dispatch) => {
    return PostAPI
      .create(post)
      .then((post) => {
        dispatch(postCreated(post));
      });
  };
}

function fetchPosts() {
  return (dispatch) => {
    return PostAPI
      .getAll()
      .then((posts) =>{
        dispatch(receivePosts(posts));
      });
  };
}

function receivePosts(posts) {
  return {
    type: POSTS_RECEIVE,
    posts: posts
  };
}


export {
  POST_CREATED,
  postCreate,
  fetchPosts,
  receivePosts,
  POSTS_RECEIVE
};
