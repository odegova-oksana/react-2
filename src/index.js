import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure?</ApprovalCard>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Nice blog post!"
          src="https://source.unsplash.com/random"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Antony"
          timeAgo="Today at 11:45AM"
          comment="Hooray!"
          src="https://source.unsplash.com/random"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Anna"
          timeAgo="Yesterday at 2:41PM"
          comment="Fancy outfit!"
          src="https://source.unsplash.com/random"
        />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render (<App />, document.querySelector ('#root'));
