import React from 'react';
import { connect } from 'react-redux';


function PostsList(props) {
  return (
    <div className="postslist">
      {props.posts.map((item) => {
        return (
          <article key={item.id}>
            <h2>{item.title}</h2>
            <p>Written by: {item.author}</p>
            <p>{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}


function mapStateToProps(state) {
  return {
    posts: Object.keys(state.postsById).map((key) => {
      return {...state.postsById[key]};
    })
  };
}


export default connect(mapStateToProps)(PostsList);
