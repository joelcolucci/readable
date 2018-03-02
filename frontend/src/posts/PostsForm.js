import React, { Component } from 'react';


class PostsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      author: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    this.setState({
      [inputName]: inputValue
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={this.handleInputChange} />

        <input
          type="text"
          name="body"
          placeholder="body"
          onChange={this.handleInputChange} />

        <input
          type="text"
          name="author"
          placeholder="author"
          onChange={this.handleInputChange} />

        <select>
          <option>TODO: Categories</option>
        </select>

        <button type="submit">Save</button>
      </form>
    );
  }
}


export default PostsForm;
