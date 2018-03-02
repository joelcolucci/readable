import { CREATE_POST } from './actions';


const initialState = {
  postsById: {}
};


function postsReducer(previousState=initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      let post = action.post;
      return {
        ...previousState,
        postsById: {
          ...previousState.postsById,
          [post.id]: post
        }
      };
    default:
      return previousState;
  }
}


export {
  postsReducer
};
