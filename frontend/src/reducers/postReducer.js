import { POST_CREATED, POSTS_RECEIVE } from '../actions/postActions';


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

    case POSTS_RECEIVE:
      let postsById = action.posts.reduce((accumulator, item) => {
        accumulator[item.id] = {...item};
        return accumulator;
      }, {});

      return {
        ...previousState,
        postsById: postsById
      };

    default:
      return previousState;
  }
}


export default postsReducer;
