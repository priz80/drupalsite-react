import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Burger from './components/Burger';
import Faq from './components/Faq';
import Reviews from './components/Reviews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Burger />
    <Faq />
    <Reviews />
  </React.StrictMode>
);