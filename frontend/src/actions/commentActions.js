import * as CommentAPI from '../utilities/CommentAPI';


/** CREATE */
export const COMMENT_CREATE_REQUEST = 'COMMENT_CREATE_REQUEST';
export const COMMENT_CREATE_ERROR = 'COMMENT_CREATE_ERROR';
export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS';

export const commentCreateRequest = () => {
  return {
    type: COMMENT_CREATE_REQUEST,
    category: ''
  };
};

export const commentCreateError = () => {
  return {
    type: COMMENT_CREATE_ERROR
  };
};

export const commentCreateSuccess = (comment) => {
  return {
    type: COMMENT_CREATE_SUCCESS,
    comment
  };
};

export const createComment = (comment) => {
  return (dispatch) => {
    dispatch(commentCreateRequest());

    return CommentAPI
      .create(comment)
      .then((comment) => {
        dispatch(commentCreateSuccess(comment));
      });
  };
};


/** READ ALL FOR POST */
export const COMMENT_READ_ALL_FOR_POST_REQUEST = 'COMMENT_READ_ALL_FOR_POST_REQUEST';
export const COMMENT_READ_ALL_FOR_POST_ERROR = 'COMMENT_READ_ALL_FOR_POST_ERROR';
export const COMMENT_READ_ALL_FOR_POST_SUCCESS = 'COMMENT_READ_ALL_FOR_POST_SUCCESS';

export const commentReadAllForPostRequest = () => {
  return {
    type: COMMENT_READ_ALL_FOR_POST_REQUEST
  };
};

export const commentReadAllForPostError = () => {
  return {
    type: COMMENT_READ_ALL_FOR_POST_ERROR
  };
};

export const commentReadAllForPostSuccess = (comments) => {
  return {
    type: COMMENT_READ_ALL_FOR_POST_SUCCESS,
    comments
  };
};

export const readCommentsForPost = (postId) => {
  return (dispatch) => {
    dispatch(commentReadAllForPostRequest());

    return CommentAPI
      .getAllForPost(postId)
      .then((comments) =>{
        dispatch(commentReadAllForPostSuccess(comments));
      });
  };
};


/** READ */
export const COMMENT_READ_REQUEST = 'COMMENT_READ_REQUEST';
export const COMMENT_READ_ERROR = 'COMMENT_READ_REQUEST';
export const COMMENT_READ_SUCCESS = 'COMMENT_READ_SUCCESS';

export const commentReadRequest = () => {
  return {
    type: COMMENT_READ_REQUEST
  };
};

export const commentReadError = () => {
  return {
    type: COMMENT_READ_ERROR
  };
};

export const commentReadSuccess = (comment) => {
  return {
    type: COMMENT_READ_SUCCESS,
    comment
  };
};

export const readComment = (commentId) => {
  return (dispatch) => {
    dispatch(commentReadRequest());

    return CommentAPI
      .get(commentId)
      .then((comment) => {
        dispatch(commentReadSuccess(comment));
      });
  };
};

/** UPDATE */
export const COMMENT_UPDATE_REQUEST = 'COMMENT_UPDATE_REQUEST';
export const COMMENT_UPDATE_ERROR = 'COMMENT_UPDATE_REQUEST';
export const COMMENT_UPDATE_SUCCESS = 'COMMENT_UPDATE_SUCCESS';

export const commentUpdateRequest = () => {
  return {
    type: COMMENT_UPDATE_REQUEST
  };
};

export const commentUpdateError = () => {
  return {
    type: COMMENT_UPDATE_ERROR
  };
};

export const commentUpdateSuccess = (comment) => {
  return {
    type: COMMENT_UPDATE_SUCCESS,
    comment
  };
};

export const updateComment = (comment) => {
  return (dispatch) => {
    dispatch(commentUpdateRequest());

    return CommentAPI
      .update(comment)
      .then((comment) => {
        dispatch(commentUpdateSuccess(comment));
      });
  };
};


/** DELETE */
export const COMMENT_DELETE_REQUEST = 'COMMENT_DELETE_REQUEST';
export const COMMENT_DELETE_ERROR = 'COMMENT_DELETE_REQUEST';
export const COMMENT_DELETE_SUCCESS = 'COMMENT_DELETE_SUCCESS';

export const commentDeleteRequest = () => {
  return {
    type: COMMENT_DELETE_REQUEST
  };
};

export const commentDeleteError = () => {
  return {
    type: COMMENT_DELETE_ERROR
  };
};

export const commentDeleteSuccess = (comment) => {
  return {
    type: COMMENT_DELETE_SUCCESS,
    comment
  };
};

export const deleteComment = (commentId) => {
  return (dispatch) => {
    dispatch(commentDeleteRequest());

    return CommentAPI
      .remove(commentId)
      .then((comment) => {
        dispatch(commentDeleteSuccess(comment));
      });
  };
};


/** VOTE */
export const COMMENT_VOTE_REQUEST = 'COMMENT_VOTE_REQUEST';
export const COMMENT_VOTE_ERROR = 'COMMENT_VOTE_REQUEST';
export const COMMENT_VOTE_SUCCESS = 'COMMENT_VOTE_SUCCESS';

export const commentVoteRequest = () => {
  return {
    type: COMMENT_VOTE_REQUEST
  };
};

export const commentVoteError = () => {
  return {
    type: COMMENT_VOTE_ERROR
  };
};

export const commentVoteSuccess = (comment) => {
  return {
    type: COMMENT_VOTE_SUCCESS,
    comment
  };
};

export const updateVoteScore = (vote) => {
  return (dispatch) => {
    dispatch(commentVoteRequest());

    return CommentAPI
      .updateVote(vote)
      .then((comment) => {
        dispatch(commentVoteSuccess(comment));
      });
  };
};
