/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 13:01:43
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-11 17:10:59
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    // <React.StrictMode>
        <App />,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
