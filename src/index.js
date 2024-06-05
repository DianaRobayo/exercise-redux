import React from 'react';
// import  ReactDOM  from 'react-dom/client';
import { createRoot } from 'react-dom/client'; // Con esto mejora la carga del DOM y utilizar el redux
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

