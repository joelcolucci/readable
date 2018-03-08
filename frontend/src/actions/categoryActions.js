import * as CategoryAPI from '../utilities/CategoryAPI';


/** READ ALL */
export const CATEGORY_READ_ALL_REQUEST = 'CATEGORY_READ_ALL_REQUEST';
export const CATEGORY_READ_ALL_ERROR = 'CATEGORY_READ_ALL_ERROR';
export const CATEGORY_READ_ALL_SUCCESS = 'CATEGORY_READ_ALL_SUCCESS';

export const categoryReadAllRequest = () => {
  return {
    type: CATEGORY_READ_ALL_REQUEST,
    category: ''
  };
};

export const categoryReadAllError = () => {
  return {
    type: CATEGORY_READ_ALL_ERROR
  };
};

export const categoryReadAllSuccess = (categories) => {
  return {
    type: CATEGORY_READ_ALL_SUCCESS,
    categories
  };
};

export const readAllCategories = () => {
  return (dispatch) => {
    dispatch(categoryReadAllRequest());

    return CategoryAPI
      .getAll()
      .then((categories) =>{
        dispatch(categoryReadAllSuccess(categories));
      });
  };
};
