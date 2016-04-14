import React from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';
import Radium from 'radium';

const style = {
  linkUser: {
    background: 'red',
    ':hover': {
      background: '#0074d9',
    },
  },
}

@Radium
class ReactBootstrapRadium extends React.Component {
  render() {
    return (
      <Dropdown id="dropDown" style={style.linkUser}>
        <Dropdown.Toggle useAnchor className="userMenuName">
          {name}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem onSelect={() => console.log(1)}>
            Settings <i className="fa fa-gears pull-right" />
          </MenuItem>
          <MenuItem divider />
          <MenuItem id="logOutLink" onSelect={() => console.log(2)}>
            Logout
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default ReactBootstrapRadium;
