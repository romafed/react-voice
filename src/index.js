import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as MainRouter } from 'react-router-dom';
import './../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';

ReactDOM.render(
    (
        <MainRouter>
            <App />
        </MainRouter>
    ),
    document.getElementById('root')
);
