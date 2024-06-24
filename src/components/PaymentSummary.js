// src/components/PaymentSummary.js
import React from "react";
import "../App.css";

const PaymentSummary = ({ payment }) => {
  return (
    <div>
      <h2>Payment Summary</h2>
      <p>Name: {payment.name}</p>
      <p>Email: {payment.email}</p>
      <p>Address: {payment.address}</p>
      <p>City: {payment.city}</p>
      <p>State/Province: {payment.state}</p>
      <p>Postal Code: {payment.postalCode}</p>
      <p>
        Card Number:{" "}
        {payment.cardNumber.replace(/\d{12}(\d{4})/, "************$1")}
      </p>
      <p>Expiry Date: {payment.expiryDate}</p>
      <p>Amount: ${payment.amount}</p>
    </div>
  );
};

export default PaymentSummary;
