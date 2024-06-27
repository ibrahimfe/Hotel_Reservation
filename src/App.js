// src/App.js
import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import PaymentSummary from "./components/PaymentSummary";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import BestOffer from "./components/BestOffer";
import Footer from "./components/Footer";

const App = () => {
  const [payment, setPayment] = useState(null);

  const handlePaymentSubmit = (paymentData) => {
    setPayment(paymentData);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Facilities />
      <BestOffer />
      <Footer />
      <h1>Payment Form</h1>
      {!payment ? (
        <PaymentForm onSubmit={handlePaymentSubmit} />
      ) : (
        <PaymentSummary payment={payment} />
      )}
    </div>
  );
};

export default App;
