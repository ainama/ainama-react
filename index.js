import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import App from './page/app.js';

const div = document.createElement('div');
document.body.appendChild(div);

function app() {
  return (
    <Provider store = { store }>
      <App />
    </Provider>
  );
};

ReactDOM.render(
  app(),
  div
);

// ReactDOM.unmountComponentAtNode(div);
// document.body.removeChild(div);
