import {
  POST_CREATE_REQUEST,
  POST_CREATE_ERROR,
  POST_CREATE_SUCCESS,
  POST_READ_ALL_REQUEST,
  POST_READ_ALL_ERROR,
  POST_READ_ALL_SUCCESS
} from '../actions/postActions';


const initialState = {
  postsById: {},
  isFetching: false
};

// "Selectors" are used in mapStateToProps

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

    case POST_READ_ALL_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case POST_READ_ALL_REQUEST:
      return {
        ...previousState,
        isFetching: true
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

    default:
      return previousState;
  }
}


export default postsReducer;
