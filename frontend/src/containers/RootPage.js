import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { readAllPosts, sortPosts } from '../actions/postActions';

import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import PostList from '../components/PostList';


class RootPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(readAllPosts());
  }

  handleSortClick(sortField) {
    this.props.dispatch(sortPosts(sortField));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <div className="post-list-container">
            <h4>Sort by:
              <button
                className="link"
                onClick={() => this.handleSortClick('votes')}>Votes</button> |
              <button
                className="link"
                onClick={() => this.handleSortClick('created')}> Created</button>
            </h4>
            <PostList posts={this.props.posts} />
          </div>
          <div className="category-list-container">
            <CategoryList categories={this.props.categories}/>
          </div>          
        </main>
        <Link to="/posts/create" className="add-button">+</Link>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  let { postsReducer } = state;
  return {
    posts: Object.keys(postsReducer.postsById).map((key) => {
      return {...postsReducer.postsById[key]};
    })
    .filter((elem) => elem.deleted === false)
    .sort((a, b) => {
      if (postsReducer.sortBy === 'created') {
        return a.timestamp < b.timestamp;
      } else {
        return a.voteScore < b.voteScore;
      }
    })
  };
}


export default connect(mapStateToProps)(RootPage);
