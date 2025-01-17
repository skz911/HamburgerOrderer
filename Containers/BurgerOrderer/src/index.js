/**
 * Entry point for the React application.
 * Renders the main App component inside the root element in index.html
 */

import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './styles/tailwind.css';
import App from './app';

// Get the root DOM node to render the app into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the new createRoot API to render

/**
 * Renders the app component
 */
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
