import React from 'react';
import { Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => {
          return (
            <h2>Default view</h2>
          );
        }} />

        <Route exact path="/posts/create" render={() => {
          return (
            <h2>Posts editor</h2>
          );
        }} />
      </div>
    );
  }
}


export default App;
