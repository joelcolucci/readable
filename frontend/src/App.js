import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';


class App extends React.Component {
  render() {
    return (
      <div className="app">
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
            <div>
              <Header />
              <h2>Posts editor</h2>
              <PostForm />
            </div>
          );
        }} />
      </div>
    );
  }
}


export default App;
