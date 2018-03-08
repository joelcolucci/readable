import React from 'react';
import { connect } from 'react-redux';

import { getPostsByCategory } from '../actions/categoryActions';

import PostList from '../components/PostList';


class CategoryPostsPage extends React.Component {
  componentDidMount() {
    let { category } = this.props;
    this.props.dispatch(getPostsByCategory(category));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      let { category } = nextProps;
      this.props.dispatch(getPostsByCategory(category));
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Posts by category</h2>
        <PostList posts={this.props.posts} />
      </React.Fragment>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    posts: state.categoryReducer.postsByCategory
  };
}


export default connect(mapStateToProps)(CategoryPostsPage);
