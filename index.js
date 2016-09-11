'use strict'
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Game from './containers/Game';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, {
  game: {
    player: 1,
    win: 0,
    marks: 3,
    noTileLeft: false,
    judging: false,
    board: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  }
}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
