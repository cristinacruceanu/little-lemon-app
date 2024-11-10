import React from "react";
import "../styles/BookTable.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationTitle from "../components/Reservation/ReservationTitle";
import ReservationDropdown from "../components/Reservation/ReservationDropdown";
import PaymentForm from "../components/PaymentForm";

const BookTable = () => {
  return (
    <div className="book-table-page">
      <Header />
      <main className="book-table-page-container">
        <div className="book-table-content">
          <ReservationTitle
            title="Little Lemon"
            subtitle="Chicago"
            description=""
          />
          <h3>Booking Details</h3>
          <ReservationDropdown />
          <h4>Credit Card Details</h4>
          <PaymentForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default BookTable;
