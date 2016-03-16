import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';

import CustomComponent from './Component';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

function testAction(text) {
  return {
    type: 'TEST_ACTION',
    text
  };
}


const enhancer = compose(
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

let store = createStore(visibilityFilter, {}, enhancer);

const render = () => {
  ReactDOM.render(
    <CustomComponent />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();

store.dispatch(testAction('test'));
