import { push } from 'react-router-redux';

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
        dispatch(push('/'));
        dispatch(postCreateSuccess(post));
      });
  };
};


/** READ ALL */
export const POST_READ_ALL_REQUEST = 'POST_READ_ALL_REQUEST';
export const POST_READ_ALL_ERROR = 'POST_READ_ALL_ERROR';
export const POST_READ_ALL_SUCCESS = 'POST_READ_ALL_SUCCESS';

export const postReadAllRequest = () => {
  return {
    type: POST_READ_ALL_REQUEST
  };
};

export const postReadAllError = () => {
  return {
    type: POST_READ_ALL_ERROR
  };
};

export const postReadAllSuccess = (posts) => {
  return {
    type: POST_READ_ALL_SUCCESS,
    posts
  };
};

export const readAllPosts = (category) => {
  return (dispatch) => {
    dispatch(postReadAllRequest());

    return PostAPI
      .getAll(category)
      .then((posts) =>{
        dispatch(postReadAllSuccess(posts));
      });
  };
};


/** READ */
export const POST_READ_REQUEST = 'POST_READ_REQUEST';
export const POST_READ_ERROR = 'POST_READ_REQUEST';
export const POST_READ_SUCCESS = 'POST_READ_SUCCESS';

export const postReadRequest = () => {
  return {
    type: POST_READ_REQUEST
  };
};

export const postReadError = () => {
  return {
    type: POST_READ_ERROR
  };
};

export const postReadSuccess = (post) => {
  return {
    type: POST_READ_SUCCESS,
    post
  };
};

export const readPost = (postId) => {
  return (dispatch) => {
    dispatch(postReadRequest());

    return PostAPI
      .get(postId)
      .then((post) => {
        dispatch(postReadSuccess(post));
      });
  };
};

/** UPDATE */
export const POST_UPDATE_REQUEST = 'POST_UPDATE_REQUEST';
export const POST_UPDATE_ERROR = 'POST_UPDATE_REQUEST';
export const POST_UPDATE_SUCCESS = 'POST_UPDATE_SUCCESS';

export const postUpdateRequest = () => {
  return {
    type: POST_UPDATE_REQUEST
  };
};

export const postUpdateError = () => {
  return {
    type: POST_UPDATE_ERROR
  };
};

export const postUpdateSuccess = (post) => {
  return {
    type: POST_UPDATE_SUCCESS,
    post
  };
};

export const updatePost = (post) => {
  return (dispatch) => {
    dispatch(postUpdateRequest());

    return PostAPI
      .update(post)
      .then((post) => {
        dispatch(push('/'));
        dispatch(postUpdateSuccess(post));
      });
  };
};


/** DELETE */
export const POST_DELETE_REQUEST = 'POST_DELETE_REQUEST';
export const POST_DELETE_ERROR = 'POST_DELETE_REQUEST';
export const POST_DELETE_SUCCESS = 'POST_DELETE_SUCCESS';

export const postDeleteRequest = () => {
  return {
    type: POST_DELETE_REQUEST
  };
};

export const postDeleteError = () => {
  return {
    type: POST_DELETE_ERROR
  };
};

export const postDeleteSuccess = (post) => {
  return {
    type: POST_DELETE_SUCCESS,
    post
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    dispatch(postDeleteRequest());

    return PostAPI
      .remove(postId)
      .then((post) => {
        dispatch(push('/'));
        dispatch(postDeleteSuccess(post));
      });
  };
};


/** VOTE */
export const POST_VOTE_REQUEST = 'POST_VOTE_REQUEST';
export const POST_VOTE_ERROR = 'POST_VOTE_REQUEST';
export const POST_VOTE_SUCCESS = 'POST_VOTE_SUCCESS';

export const postVoteRequest = () => {
  return {
    type: POST_VOTE_REQUEST
  };
};

export const postVoteError = () => {
  return {
    type: POST_VOTE_ERROR
  };
};

export const postVoteSuccess = (post) => {
  return {
    type: POST_VOTE_SUCCESS,
    post
  };
};

export const updateVoteScore = (vote) => {
  return (dispatch) => {
    dispatch(postVoteRequest());

    return PostAPI
      .updateVote(vote)
      .then((post) => {
        dispatch(postVoteSuccess(post));
      });
  };
};


/** SORT */
export const POST_SORT_POSTS = 'POST_SORT_POSTS';

export const sortPosts = (sortField) => {
  return {
    type: POST_SORT_POSTS,
    sortBy: sortField
  };
};


/** SELECTORS */

export const getSortedPosts = (state) => {
  let { postsReducer } = state;
  return Object
    .keys(postsReducer.postsById)
    .map((key) => {
      return {...postsReducer.postsById[key]};
    })
    .filter((elem) => elem.deleted === false)
    .sort((a, b) => {
      if (postsReducer.sortBy === 'created') {
        return a.timestamp < b.timestamp;
      } else {
        return a.voteScore < b.voteScore;
      }
    });
};


