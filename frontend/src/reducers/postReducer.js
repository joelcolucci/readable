import { POST_CREATED } from '../actions/postActions';


const initialState = {
  postsById: {}
};


function postsReducer(previousState=initialState, action) {
  switch (action.type) {
    case POST_CREATED:
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


export default postsReducer;
