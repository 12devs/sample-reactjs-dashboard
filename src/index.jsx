import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom'

import reducers from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './router/AppRoutes';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
