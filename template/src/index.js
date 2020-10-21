import React from 'react';
import { render } from 'react-dom';
import './styles.scss';

const App = ()=> {
    return(<h1>Hello World</h1>);
};

render(
    <App/>,
    document.querySelector('#root')
);