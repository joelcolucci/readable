import React from 'react';
import { connect } from 'react-redux';

import { readAllPosts } from '../actions/postActions';

import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import PostList from '../components/PostList';


class CategoryPostsPage extends React.Component {
  componentDidMount() {
    let { category } = this.props;
    this.props.dispatch(readAllPosts(category));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      let { category } = nextProps;
      this.props.dispatch(readAllPosts(category));
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <div className="post-list-container">
            <h4>Sort by: Votes | Created</h4>
            <PostList posts={this.props.posts} />
          </div>
          <div className="category-list-container">
            <CategoryList categories={this.props.categories}/>
          </div>
        </main>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let { postsReducer } = state;
  return {
    posts: Object.keys(postsReducer.postsById).map((key) => {
      return {...postsReducer.postsById[key]};
    })
    .filter((elem) => elem.deleted === false)
  };
}


export default connect(mapStateToProps)(CategoryPostsPage);
