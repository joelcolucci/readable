import { combineReducers } from 'redux';

import postsReducer from './postReducer';
import categoryReducer from './categoryReducer';


let rootReducer = combineReducers({
  postsReducer,
  categoryReducer
});


export default rootReducer;
