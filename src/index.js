import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components'
import { BrowserRouter } from 'react-router-dom'
import Provider from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
