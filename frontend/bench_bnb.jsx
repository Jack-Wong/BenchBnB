import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import {requestBenches} from './actions/bench_actions';

window.store = configureStore();

window.requestBenches = requestBenches;

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser){
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    };
    var store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
