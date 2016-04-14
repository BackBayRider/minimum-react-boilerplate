import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, combineReducers } from 'redux';
import { persistState } from 'redux-devtools';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { StyleRoot } from 'radium';

import Component2 from './Component2';
import RadiumTest from './RadiumTest';

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
  ReactDOM.render(<StyleRoot>
      <Provider store={store}>
        <Component2 /></Provider>
    </StyleRoot>,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
