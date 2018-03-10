import React from 'react';

import TimeAgo from 'react-timeago';
import CommentVoteCounter from './CommentVoteCounter';
import CommentDeleteButton from './CommentDeleteButton';
import CommentUpdateForm from './CommentUpdateForm';

// On edit click
// set state toggle
// which controls showing body or the form

// 1. conver to class components rather than stateless functinal component

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inEditMode: false
    };

    this.handleEditModeToggle = this.handleEditModeToggle.bind(this);
  }

  handleEditModeToggle(event) {
    event.preventDefault();

    this.setState((previousState) => ({
      inEditMode: !previousState.inEditMode
    }));
  }

  render() {
    let { comment } = this.props;
    let inEditMode = this.state.inEditMode;

    let body = null;
    if (inEditMode) {
      body = <CommentUpdateForm comment={comment} />;
    } else {
      body = <p className="comment-body">{comment.body}</p>;
    }
    return (
      <div className="comment">
        <div className="comment-flex">
          <div className="comment-vote-counter">
            <CommentVoteCounter commentId={comment.id} voteCount={comment.voteScore} />
          </div>
          <div>
            { body }
          </div>
        </div>
        <div className="comment-meta">
          <p className="comment-sub-title">Submitted <TimeAgo date={comment.timestamp} live={false} /> by {comment.author}</p>
        </div>
        <div className="comment-controls">

          <button className="link" onClick={this.handleEditModeToggle}>
            {inEditMode ? 'Cancel' : 'Edit'}
          </button>
          <CommentDeleteButton commentId={comment.id} />
        </div>
      </div>
    );
  }
}

export default Comment;
