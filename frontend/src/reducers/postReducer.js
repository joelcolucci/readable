import {
  POST_CREATE_REQUEST,
  POST_CREATE_ERROR,
  POST_CREATE_SUCCESS,
  POST_READ_ALL_REQUEST,
  POST_READ_ALL_ERROR,
  POST_READ_ALL_SUCCESS,
  POST_READ_REQUEST,
  POST_READ_ERROR,
  POST_READ_SUCCESS,
  POST_DELETE_REQUEST,
  POST_DELETE_ERROR,
  POST_DELETE_SUCCESS,
  POST_UPDATE_REQUEST,
  POST_UPDATE_ERROR,
  POST_UPDATE_SUCCESS,
  POST_VOTE_REQUEST,
  POST_VOTE_ERROR,
  POST_VOTE_SUCCESS,
  POST_SORT_POSTS
} from '../actions/postActions';


const initialState = {
  postsById: {},
  isFetching: false,
  sortBy: 'created'
};


function postsReducer(previousState=initialState, action) {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case POST_CREATE_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case POST_CREATE_SUCCESS:
      let post = action.post;
      return {
        ...previousState,
        isFetching: false,
        postsById: {
          ...previousState.postsById,
          [post.id]: post
        }
      };

    case POST_READ_ALL_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case POST_READ_ALL_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case POST_READ_ALL_SUCCESS:
      let postsById = action.posts.reduce((accumulator, item) => {
        accumulator[item.id] = {...item};
        return accumulator;
      }, {});

      return {
        ...previousState,
        isFetching: false,
        postsById: postsById
      };

    case POST_READ_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case POST_READ_ERROR:
      return {
        ...previousState,
        isFetching: false
      };
  
    case POST_READ_SUCCESS: {
      let post = action.post;
      return {
        ...previousState,
        postsById: {
          ...previousState.postsById,
          [post.id]: post
        }
      };
    }

    case POST_UPDATE_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case POST_UPDATE_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case POST_UPDATE_SUCCESS: {
        let post = action.post;
        return {
          ...previousState,
          postsById: {
            ...previousState.postsById,
            [post.id]: post
          }
        };
      }

    case POST_DELETE_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case POST_DELETE_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case POST_DELETE_SUCCESS: {
        let post = action.post;
        return {
          ...previousState,
          postsById: {
            ...previousState.postsById,
            [post.id]: post
          }
        };
      }

    case POST_VOTE_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case POST_VOTE_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case POST_VOTE_SUCCESS: {
        let post = action.post;
        return {
          ...previousState,
          postsById: {
            ...previousState.postsById,
            [post.id]: post
          }
        };
      }

    case POST_SORT_POSTS:
      return {
        ...previousState,
        sortBy: action.sortBy
      };

    default:
      return previousState;
  }
}


export default postsReducer;
