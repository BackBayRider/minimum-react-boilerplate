import React from 'react'
import { Link } from 'react-router'

const Menu = props => (
  <div>
    <Link to="/about-us" activeStyle={{ color: 'red' }}>About us</Link>
    <Link to="/contact" activeStyle={{ color: 'red' }}>Contact</Link>
    <Link to="/services" activeStyle={{ color: 'red' }}>Services</Link>
  </div>
)

export default Menu
