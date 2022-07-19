import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux'; //redux toolkit


import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

import rootReducer from './reducers/combineReducers'

const store = legacy_createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, rootElement);
