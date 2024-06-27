import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PaymentSummary from "./components/PaymentSummary";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import BestOffer from "./components/BestOffer";
import Footer from "./components/Footer";
import PaymentPage from "./pages/PaymentPage";

const App = () => {
  const [payment, setPayment] = useState(null);

  const handlePaymentSubmit = (paymentData) => {
    setPayment(paymentData);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Facilities />
                <BestOffer />
                <Footer />
                <Link to="/payment"></Link>
              </>
            }
          />
          <Route
            path="/payment"
            element={
              !payment ? (
                <PaymentPage onSubmit={handlePaymentSubmit} />
              ) : (
                <PaymentSummary payment={payment} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
