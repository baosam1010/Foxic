import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

import { I18nextProvider } from 'react-i18next';
import i18n from './languages/i18n';

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(thunk)
  // other store enhancers if any
)
const store = createStore(
  rootReducer,
  composedEnhancer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// console.log('store:', store);




ReactDOM.render(

  <Provider store={store} >
    <React.StrictMode>

      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>

    </React.StrictMode>

  </Provider>


  , document.getElementById('root')
);

reportWebVitals();





