import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// ref 저장 공간
// import App from './Ex01';

// ref DOM 접근
// import App from './Ex02';

// ref 로그인 실습
// import App from './Ex03';

// ref 사진 실습
import App from './Ex04';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
