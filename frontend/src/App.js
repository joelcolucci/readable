import React from 'react';
import { Route } from 'react-router-dom';

import DefaultView from './views/DefaultView';
import PostsEditorView from './views/PostsEditorView';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={DefaultView} />
        <Route exact path="/posts/create" component={PostsEditorView} />
      </div>
    );
  }
}


export default App;
