import React, { PropTypes } from 'react'
import Menu from './Menu'
import { Grid } from 'react-bootstrap'

const App = props => (
  <Grid>I am App!
    <Menu />
    {props.children}
  </Grid>
)

App.propTypes = {
  children: PropTypes.object,
}


export default App
