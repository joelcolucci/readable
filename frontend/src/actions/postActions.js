import * as PostAPI from '../utilities/PostAPI';


/** CREATE */
export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST';
export const POST_CREATE_ERROR = 'POST_CREATE_ERROR';
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS';

export const postCreateRequest = () => {
  return {
    type: POST_CREATE_REQUEST,
    category: ''
  };
};

export const postCreateError = () => {
  return {
    type: POST_CREATE_ERROR
  };
};

export const postCreateSuccess = (post) => {
  return {
    type: POST_CREATE_SUCCESS,
    post
  };
};

export const createPost = (post) => {
  return (dispatch) => {
    dispatch(postCreateRequest());

    return PostAPI
      .create(post)
      .then((post) => {
        dispatch(postCreateSuccess(post));
      });
  };
};

/** READ ALL */
export const POST_READ_ALL_REQUEST = 'POST_READ_ALL_REQUEST';
export const POST_READ_ALL_ERROR = 'POST_READ_ALL_ERROR';
export const POST_READ_ALL_SUCCESS = 'POST_READ_ALL_SUCCESS';

export const readAllPosts = () => {
  return (dispatch) => {
    return PostAPI
      .getAll()
      .then((posts) =>{
        dispatch(postReadAllSuccess(posts));
      });
  };
};

export const postReadAllSuccess= (posts) => {
  return {
    type: POST_READ_ALL_SUCCESS,
    posts: posts
  };
};
