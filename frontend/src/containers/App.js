import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { readAllCategories } from '../actions/categoryActions';

import RootPage from './RootPage';
import CategoryPostsPage from './CategoryPostsPage';
import PostCreatePage from './PostCreatePage';
import PostReadPage from './PostReadPage';
import PostUpdatePage from './PostUpdatePage';


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(readAllCategories());
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <RootPage
                categories={this.props.categories} />
            );
          }} />

          <Route exact path="/posts/create" render={() => {
            return (
              <PostCreatePage
                categories={this.props.categories} />
            );
          }} />

          <Route path="/:category/:id/update" render={(props) => {
            let { match } = props;
            return (
              <PostUpdatePage
                postId={match.params.id}
                categories={this.props.categories} />
            );
          }} />

          <Route path="/:category/:id" render={(props) => {
            let { match } = props;
            return (
              <PostReadPage
                postId={match.params.id}
                categories={this.props.categories} />
            );
          }} />

          <Route exact path="/:category" render={(props) => {
            let { match } = props;
            return (
              <CategoryPostsPage
                categories={this.props.categories}
                category={match.params.category} />
            );
          }} />
        </Switch>
      </React.Fragment>
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


export default withRouter(connect(mapStateToProps)(App));
