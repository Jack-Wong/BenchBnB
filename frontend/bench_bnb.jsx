import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import {requestBenches} from './actions/bench_actions';
import {fetchBenches} from './util/bench_api_util';

window.store = configureStore();

window.requestBenches = requestBenches;
window.fetchBenches = fetchBenches;

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
