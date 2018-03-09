import React from 'react';
import { connect } from 'react-redux';

import UpArrowIcon from 'react-icons/lib/md/arrow-upward';
import DownArrowIcon from 'react-icons/lib/md/arrow-downward';

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
      <div className="vote-counter">
        <button onClick={this.handleUpVoteClick}>
          <UpArrowIcon className="icon-arrow" />
        </button>
        <span className="vote-counter-count">{this.props.voteCount}</span>
        <button onClick={this.handleDownVoteClick}>
          <DownArrowIcon className="icon-arrow" />
        </button>
      </div>
    );
  }
}


export default connect()(PostVoteCounter);
