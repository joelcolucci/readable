import * as PostsAPI from '../utilities/PostsAPI';

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
    return PostsAPI
      .create(post)
      .then((post) => {
        dispatch(postCreated(post));
      });
  };
}

function fetchPosts() {
  return (dispatch) => {
    return PostsAPI
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
