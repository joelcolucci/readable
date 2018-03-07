import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { readAllCategories } from '../actions/categoryActions';

import Header from '../components/Header';
import PostList from '../components/PostList';
import CategoryList from '../components/CategoryList';

import PostCreatePage from './PostCreatePage';
import PostReadPage from './PostReadPage';
import PostUpdatePage from './PostUpdatePage';


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(readAllCategories());
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div>
                <Header />
                <CategoryList categories={this.props.categories}/>
                <h2>Most recent posts</h2>
                <PostList />
              </div>
            );
          }} />

          <Route exact path="/posts/create" render={() => {
            return (
              <React.Fragment>
                <Header />
                <PostCreatePage />
              </React.Fragment>
            );
          }} />

          <Route path="/posts/:id/update" render={(props) => {
            let { match } = props;
            return (
              <React.Fragment>
                <Header />
                <PostUpdatePage postId={match.params.id}/>
              </React.Fragment>
            );
          }} />

          <Route path="/posts/:id" render={(props) => {
            let { match } = props;
            return (
              <React.Fragment>
                <Header />
                <PostReadPage postId={match.params.id}/>
              </React.Fragment>
            );
          }} />
        </Switch>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let categories = state.categoryReducer.categories.map((elem) => {
    return elem.name;
  });

  return {
    categories: categories
  };
}


export default connect(mapStateToProps)(App);
