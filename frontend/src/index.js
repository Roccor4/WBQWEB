import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize MailerLite after component mount
window.addEventListener('load', () => {
  // Give MailerLite script time to load
  setTimeout(() => {
    if (window.ml) {
      console.log('MailerLite initialized successfully');
    } else {
      console.log('MailerLite script loading...');
    }
  }, 2000);
});