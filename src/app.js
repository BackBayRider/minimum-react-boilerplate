import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, combineReducers } from 'redux'
import { persistState } from 'redux-devtools'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './client/Components/App'
import Contact from './client/Components/Contact'
import AboutUs from './client/Components/AboutUs'
import Services from './client/Components/Services'

const enhancer = compose(
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// const store = createStore(reducer, {}, enhancer)

const render = () => {
  ReactDOM.render(<Provider>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/contact" component={Contact} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/services" component={Services} />
        </Route>
      </Router></Provider>,
    document.getElementById('app')
  )
}

// store.subscribe(render)
render()
