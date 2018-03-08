import { combineReducers } from 'redux';

import postsReducer from './postReducer';
import categoryReducer from './categoryReducer';
import commentReducer from './commentReducer';


let rootReducer = combineReducers({
  postsReducer,
  categoryReducer,
  commentReducer
});


export default rootReducer;
