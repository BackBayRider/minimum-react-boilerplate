import React, { PropTypes } from 'react'
import Menu from './Menu'

const App = props => (
  <div>I am App!
    <Menu />
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.object,
}


export default App
