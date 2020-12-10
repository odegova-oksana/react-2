import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Nice blog post!"
        src="https://source.unsplash.com/random"
      />
      <CommentDetail
        author="Antony"
        timeAgo="Today at 11:45AM"
        comment="Hooray!"
        src="https://source.unsplash.com/random"
      />
      <CommentDetail
        author="Anna"
        timeAgo="Yesterday at 2:41PM"
        comment="Fancy outfit!"
        src="https://source.unsplash.com/random"
      />
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render (<App />, document.querySelector ('#root'));
