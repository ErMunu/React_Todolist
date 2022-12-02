import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Reducers/index';



let store = createStore(reducers);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
