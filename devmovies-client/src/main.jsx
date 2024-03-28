import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from '../globalStyles.js';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
);
