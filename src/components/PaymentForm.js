import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Reservation/Reservation.css";
import "../styles/BookTable.css";
import FormField from "../components/FormField";
import Button from "../components/Button";

const PaymentForm = ({ reservationData }) => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    firstName: "",
    lastName: "",
    expirationDate: "",
    cvv: "",
    notification: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking-confirmation");
    console.log("Payment submitted:", paymentData);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <FormField
        label="Card Number"
        type="text"
        name="cardNumber"
        value={paymentData.cardNumber || ""}
        onChange={handleChange}
        required
      />
      <FormField
        label="First Name"
        type="text"
        name="firstName"
        value={paymentData.firstName || ""}
        onChange={handleChange}
        required
      />
      <FormField
        label="Last Name"
        type="text"
        name="lastName"
        value={paymentData.lastName || ""}
        onChange={handleChange}
        required
      />
      <FormField
        label="Exp Date"
        type="month"
        name="expirationDate"
        value={paymentData.expirationDate || ""}
        onChange={handleChange}
        required
      />
      <FormField
        label="CVV"
        type="password"
        name="cvv"
        value={paymentData.cvv || ""}
        onChange={handleChange}
        showToggleVisibility={false}
        required
      />
      <FormField
        label=""
        type="radio"
        name="notification"
        value={paymentData.notification || ""}
        onChange={handleChange}
        options={[
          {
            value: "Text booking notification",
            label: "Send me booking confirmation via text",
          },
          {
            value: "Email booking notification",
            label: "Send me booking confirmation via email",
          },
        ]}
        required
      />
      <Button variant="primary" type="submit">
        Book
      </Button>
    </form>
  );
};
export default PaymentForm;
