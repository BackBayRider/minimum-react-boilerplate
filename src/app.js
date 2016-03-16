import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, combineReducers } from 'redux';
import { persistState } from 'redux-devtools';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import SimpleForm from './Component';

const reducers = {
  form: formReducer,
};

const reducer = combineReducers(reducers);

const enhancer = compose(
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, {}, enhancer);

const render = () => {
  ReactDOM.render(<Provider store={store}>
      <SimpleForm /></Provider>,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
