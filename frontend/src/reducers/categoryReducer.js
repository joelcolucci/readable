import {
  CATEGORY_READ_ALL_REQUEST,
  CATEGORY_READ_ALL_ERROR,
  CATEGORY_READ_ALL_SUCCESS

} from '../actions/categoryActions';


const initialState = {
  categories: [],
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
    
    default:
      return previousState;
  }
}

export default categoryReducer;
