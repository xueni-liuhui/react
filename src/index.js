import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import router from './router';
import { Provider } from 'react-redux';
import store from './store';
//通过Provider将redux和react-redux连接
ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
