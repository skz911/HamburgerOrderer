import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18

const App = () => {
  return <h1>Hello, World!</h1>;
};

// Get the root DOM node to render the app into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the new createRoot API to render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
