import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { readAllCategories } from '../actions/categoryActions';

import Header from '../components/Header';
import CategoryList from '../components/CategoryList';

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
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div>
                <Header />
                <CategoryList categories={this.props.categories}/>
                <RootPage />
              </div>
            );
          }} />

          <Route exact path="/posts/create" render={() => {
            return (
              <React.Fragment>
                <Header />
                <PostCreatePage categories={this.props.categories} />
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

          <Route exact path="/:category" render={(props) => {
            let { match } = props;
            return (
              <React.Fragment>
                <Header />
                <CategoryList categories={this.props.categories}/>
                <CategoryPostsPage category={match.params.category} />
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

export default withRouter(connect(mapStateToProps)(App));
