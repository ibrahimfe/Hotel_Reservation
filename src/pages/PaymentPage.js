// PaymentPage.js
import React from "react";
import PaymentForm from "../components/PaymentForm"; // Ganti dengan path yang sesuai
import PaymentSummary from "../components/PaymentSummary"; // Ganti dengan path yang sesuai

const PaymentPage = ({ payment, handlePaymentSubmit }) => {
  return (
    <div>
      <h1>Payment Form</h1>
      {!payment ? (
        <PaymentForm onSubmit={handlePaymentSubmit} />
      ) : (
        <PaymentSummary payment={payment} />
      )}
    </div>
  );
};

export default PaymentPage;
