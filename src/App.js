// src/App.js
import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import PaymentSummary from "./components/PaymentSummary";
import "./App.css";

const App = () => {
  const [payment, setPayment] = useState(null);

  const handlePaymentSubmit = (paymentData) => {
    setPayment(paymentData);
  };

  return (
    <div className="App">
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
