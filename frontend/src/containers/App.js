import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import PostList from '../components/PostList';

import PostCreatePage from './PostCreatePage';
import PostReadPage from './PostReadPage';
import PostUpdatePage from './PostUpdatePage';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div>
                <Header />
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


export default App;
