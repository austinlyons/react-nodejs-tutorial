import React from 'react';
import ReactDOM from 'react-dom';

let ReactApp = (props) => {
  return (
    <div>This is a React app!</div>
  );
}

ReactDOM.render(<ReactApp/>, document.getElementById('app'));
