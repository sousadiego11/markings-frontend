import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import './styles/index.css';
import { ContextProvider } from './pages/utils/ContextProvider';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root'),
);
