import React from 'react';
import ReactDOM from 'react-dom';
import CustomComponent from './Component';


const render = () => {
  ReactDOM.render(
    <CustomComponent />,
    document.getElementById('app')
  );
};

render();
