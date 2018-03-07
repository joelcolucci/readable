import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';


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
              <div>
                <Header />
                <h2>Posts editor</h2>
                <PostForm />
              </div>
            );
          }} />

          <Route path="/posts/:id" render={(props) => {
            let { match } = props;
            return (
              <div>
                <Header />
                <h2>Post {match.params.id}</h2>
                <PostForm postId={match.params.id}/>
              </div>
            );
          }} />
        </Switch>
      </div>
    );
  }
}


export default App;
