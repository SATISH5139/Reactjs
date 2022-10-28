import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Notifications } from './Notifications';
import { Timer } from './Timer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//ReactDOM 2
const sample = ReactDOM.createRoot(
  document.getElementById('sample') as HTMLElement
);

const notify = ReactDOM.createRoot(
  document.getElementById('notifications') as HTMLElement
);


setInterval(()=>notify.render(<Notifications/>),5000);
setInterval(()=> sample.render(<Timer/>), 1000);





root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
