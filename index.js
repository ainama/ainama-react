import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/index.js';

const App = lazy(() => import('./page/app.jsx'));
const PageOne = lazy(() => import('./page/pageOne.jsx'));
const PageTwo = lazy(() => import('./page/pageTwo.jsx'));
const Hook = lazy(() => import('./page/hook.jsx'));

function app() {
  return (
    <Provider store = { store }>
      <Router>
        <Suspense fallback = { null }>
          <div>
            <Route exact path = '/' component = { App } />
            <Route exact path = '/pageOne' component = { PageOne } />
            <Route exact path = '/pageTwo' component = { PageTwo } />
            <Route exact path = '/hook' component = { Hook } />
          </div>
        </ Suspense>
      </Router>
    </Provider>
  );
};

ReactDOM.render(
  app(),
  document.getElementById('root')
);
