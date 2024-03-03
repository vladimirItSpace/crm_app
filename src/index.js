import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginApp from './components/login-app/login-app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginApp />
  </React.StrictMode>
);

