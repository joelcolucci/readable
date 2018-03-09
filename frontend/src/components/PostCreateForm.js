import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { createPost } from '../actions/postActions';


class PostCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: uuid(),
      title: '',
      body: '',
      author: '',
      category: props.categories[0] || ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      category: nextProps.categories[0] || ''
    });
  }

  handleInputChange(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    this.setState({
      [inputName]: inputValue
    });
  }

  handleCategoryChange(event) {
    let category = event.target.value;
    this.setState({
      category: category
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let post = {
      id: this.state.postId,
      timestamp: Date.now(),
      title: this.state.title,
      author: this.state.author,
      body: this.state.body,
      category: this.state.category
    };

    this.setState({
      id: '',
      title: '',
      body: '',
      author: ''
    });

    this.props.dispatch(createPost(post));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="post-form">
        <div className="form-group">
          <h4 className="form-group-heading">Content</h4>
          <input
            type="hidden"
            name="id"
            value={this.state.postId}
            onChange={this.handleInputChange} />

          <input
            className="input"
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleInputChange} />

          <textarea
            className="textarea"
            type="text"
            name="body"
            placeholder="body"
            value={this.state.body}
            onChange={this.handleInputChange}></textarea>

          <input
            className="input"
            type="text"
            name="author"
            placeholder="author"
            value={this.state.author}
            onChange={this.handleInputChange} />
        </div>

        <div className="form-group">
          <h4 className="form-group-heading">Category</h4>
          <select className="select" name="category" onChange={this.handleCategoryChange}>
            {this.props.categories.map((elem) => {
              return <option key={elem} value={elem}>{elem}</option>;
            })}
          </select>
        </div>

        <div className="post-form-controls">
          <button type="submit" className="link">Save</button>
        </div>
      </form>
    );
  }
}


export default connect()(PostCreateForm);
