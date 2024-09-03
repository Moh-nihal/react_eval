// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <Router>
        <Navbar onSearch={setSearchQuery} />
        <div className="container mx-auto p-4">
          <AppRoutes searchQuery={searchQuery} />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
