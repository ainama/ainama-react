import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/index.js';
import App from './page/app.js';

const PageOne = lazy(() => import('./page/pageOne.jsx'));
const PageTwo = lazy(() => import('./page/pageTwo.jsx'));

function app() {
  return (
    <Provider store = { store }>
      <Router>
        <Suspense fallback = { <div>loading</div> }>
          <div>
            <Route exact path = '/' component = { App } />
            <Route exact path = '/p1' component = { PageOne } />
            <Route exact path = '/p2' component = { PageTwo } />
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
