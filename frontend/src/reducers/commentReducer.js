import {
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_ERROR,
  COMMENT_CREATE_SUCCESS,
  COMMENT_READ_ALL_FOR_POST_REQUEST,
  COMMENT_READ_ALL_FOR_POST_ERROR,
  COMMENT_READ_ALL_FOR_POST_SUCCESS,
  COMMENT_READ_REQUEST,
  COMMENT_READ_ERROR,
  COMMENT_READ_SUCCESS,
  COMMENT_DELETE_REQUEST,
  COMMENT_DELETE_ERROR,
  COMMENT_DELETE_SUCCESS,
  COMMENT_UPDATE_REQUEST,
  COMMENT_UPDATE_ERROR,
  COMMENT_UPDATE_SUCCESS,
  COMMENT_VOTE_REQUEST,
  COMMENT_VOTE_ERROR,
  COMMENT_VOTE_SUCCESS
} from '../actions/commentActions';


const initialState = {
  comments: [],
  isFetching: false
};


function commentReducer(previousState=initialState, action) {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case COMMENT_CREATE_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case COMMENT_CREATE_SUCCESS:
      let comment = action.comment;
      return {
        ...previousState,
        isFetching: false,
        comments: [
          ...previousState.comments,
          comment
        ]
      };

    case COMMENT_READ_ALL_FOR_POST_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case COMMENT_READ_ALL_FOR_POST_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case COMMENT_READ_ALL_FOR_POST_SUCCESS:
      return {
        ...previousState,
        isFetching: false,
        comments: action.comments
      };

    case COMMENT_READ_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case COMMENT_READ_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case COMMENT_READ_SUCCESS: {
      return {
        ...previousState,
        comments: [
          action.comment
        ]
      };
    }

    case COMMENT_UPDATE_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case COMMENT_UPDATE_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case COMMENT_UPDATE_SUCCESS: {
      // Keep all previous comments just replace the one that was updated
      let previousComments = previousState
        .comments.filter((value) => value.id !== action.comment.id);

      return {
        ...previousState,
        comments: [
          ...previousComments,
          action.comment
        ]
      };
    }

    case COMMENT_DELETE_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case COMMENT_DELETE_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case COMMENT_DELETE_SUCCESS: {
      let previousComments = previousState
        .comments.filter((value) => value.id !== action.comment.id);

      return {
        ...previousState,
        comments: [
          ...previousComments,
          action.comment
        ]
      };
    }

    case COMMENT_VOTE_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case COMMENT_VOTE_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case COMMENT_VOTE_SUCCESS: {
        let post = action.post;
        return {
          ...previousState,
          postsById: {
            ...previousState.postsById,
            [post.id]: post
          }
        };
      }

    default:
      return previousState;
  }
}


export default commentReducer;
