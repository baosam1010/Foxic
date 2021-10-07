import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log('store:', store);

ReactDOM.render(

    <Provider store={store}>
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
      
    </Provider>
  

  , document.getElementById('root')
);

reportWebVitals();





