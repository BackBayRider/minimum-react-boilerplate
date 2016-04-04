import React, { Component } from 'react';
import Radium from 'radium';


const styles = {
  base: {
    '@media (min-width: 320px)': {
      color: 'red',
    },
  },
};

class RadiumTest extends Component {
  render() {
    return <div style={styles.base}>Test</div>;
  }
}

export default (Radium(RadiumTest));
