import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NewsDataContext } from './context/NewsDataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <NewsDataContext>
    <App />
  </NewsDataContext>
  // </React.StrictMode>
);

