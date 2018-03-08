import {
  CATEGORY_READ_ALL_REQUEST,
  CATEGORY_READ_ALL_ERROR,
  CATEGORY_READ_ALL_SUCCESS,
  CATEGORY_READ_POSTS_REQUEST,
  CATEGORY_READ_POSTS_ERROR,
  CATEGORY_READ_POSTS_SUCCESS

} from '../actions/categoryActions';


const initialState = {
  categories: [],
  postsByCategory: [],
  isFetching: false
};


function categoryReducer(previousState=initialState, action) {
  switch (action.type) {
    case CATEGORY_READ_ALL_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case CATEGORY_READ_ALL_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case CATEGORY_READ_ALL_SUCCESS:
      return {
        ...previousState,
        isFetching: false,
        categories: [
          ...action.categories
        ]
      };

    case CATEGORY_READ_POSTS_REQUEST:
      return {
        ...previousState,
        isFetching: true
      };

    case CATEGORY_READ_POSTS_ERROR:
      return {
        ...previousState,
        isFetching: false
      };

    case CATEGORY_READ_POSTS_SUCCESS:
      return {
        ...previousState,
        isFetching: false,
        postsByCategory: [
          ...action.posts
        ]
      };

    default:
      return previousState;
  }
}

export default categoryReducer;
