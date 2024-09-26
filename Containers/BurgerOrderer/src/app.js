import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import Header from './components/Header';
import Footer from './components/Footer';
/* this is the main page, here i have put a router so that i can jump inbetween pages
i have also put a header and a footer in this page so that they are always visible in the site.  */ 
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
