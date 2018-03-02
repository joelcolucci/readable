import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import PostsForm from './components/PostsForm';
import PostsList from './components/PostsList';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => {
          return (
            <div>
              <Header />
              <h2>Most recent posts</h2>
              <PostsList />
            </div>
          );
        }} />

        <Route exact path="/posts/create" render={() => {
          return (
            <div>
              <Header />
              <h2>Posts editor</h2>
              <PostsForm />
            </div>
          );
        }} />
      </div>
    );
  }
}


export default App;
