import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Main application component that sets up the routing and layout for the application.
 * 
 * It uses `react-router-dom` for handling page navigation between the home and order pages.
 * The layout includes a header, footer, and a flexible main content area.
 * 
 * @component
 * @returns {JSX.Element} The application layout with routing.
 */
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
