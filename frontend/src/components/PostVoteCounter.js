import React from 'react';
import { connect } from 'react-redux';

import { updateVoteScore } from '../actions/postActions';


class PostVoteCounter extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
    this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  }

  handleUpVoteClick(event) {
    event.preventDefault();

    let vote = {
      postId: this.props.postId,
      option: 'upVote'
    };

    this.props.dispatch(updateVoteScore(vote));
  }

  handleDownVoteClick(event) {
    event.preventDefault();

    let vote = {
      postId: this.props.postId,
      option: 'downVote'
    };

    this.props.dispatch(updateVoteScore(vote));
  }

  render() {
    return (
      <div>
        {this.props.voteCount}
        <button onClick={this.handleUpVoteClick}>Up vote</button>
        <button onClick={this.handleDownVoteClick}>Down vote</button>
      </div>
    );
  }
}


export default connect()(PostVoteCounter);
