import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchProvider from './useContext/SearchContext';
import WishlistProvider from './useContext/WishlistContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistProvider>
    <SearchProvider>
    <App />
    </SearchProvider>
    </WishlistProvider>
  </React.StrictMode>
);
