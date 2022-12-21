import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components'
import { BrowserRouter } from 'react-router-dom'
import ProviderContext from './context';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ProviderContext>
          <App />
        </ProviderContext>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
