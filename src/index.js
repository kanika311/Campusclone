import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {Provider} from 'react-redux'


import reportWebVitals from './reportWebVitals';
import store from './reduxs/store/Store.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Provider>
 
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
