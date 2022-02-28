import React from 'react';
import ReactDOM from 'react-dom';

// console.log("Hello javaScript!");
// console.log(React);
// console.log(ReactDOM);

const App = () => (
  <h1>Hello JSX</h1>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

