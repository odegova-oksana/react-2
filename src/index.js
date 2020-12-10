import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src='https://source.unsplash.com/random'/>
        </a>
        <div className="contant">
          <a href="/" className="author">
            Sam
        </a>
          <div className="metadata">
            <span className="date">
              Today at 6 pm
        </span>
          </div>
          <div className="text">
            Nice blog post!
        </div>
        </div>
      </div>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);


