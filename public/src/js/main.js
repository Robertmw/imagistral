import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';

import Editor from './pages/editor';
import Wall from './pages/wall';

import style from '../css/style.less';

render(
  <Router history={createBrowserHistory()}>
    <Route
    	component={Editor}
    	path="/"
    />
    <Route
    	component={Wall}
    	path="wall" 
    />
  </Router>,
  document.getElementById('app')
);