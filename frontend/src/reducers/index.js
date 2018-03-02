import { combineReducers } from 'redux';

import postsReducer from './postReducer';


let rootReducer = combineReducers({
  postsReducer
});


export default rootReducer;
