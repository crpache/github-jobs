import React from 'react';
import ReactDOM from 'react-dom';

//Redux stuff
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Store
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
