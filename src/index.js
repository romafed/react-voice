import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as MainRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';

import store from './Redux/store';

ReactDOM.render(
    (
        <MainRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </MainRouter>
    ),
    document.getElementById('root')
);
