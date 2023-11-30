import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './Auth';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth username='Fatima' email="wowfatima94@gmail.com" password="12345" passwordCheck="12345"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
