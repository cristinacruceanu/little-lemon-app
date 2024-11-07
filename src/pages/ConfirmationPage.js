import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Reservation/Reservation.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationTitle from "../components/Reservation/ReservationTitle";
import ReservationForm from "../components/Reservation/ReservationForm";
import Button from "../components/Button";

const ReserveTable = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/booking-confirmation");
  };
  return (
    <div className="reserve-page">
      <Header />
      <main className="reserve-page-container">
        <ReservationTitle
          title="Little Lemon"
          subtitle="Chicago"
          description="Your booking is now confirmed!"
        />

        <Button variant="primary" onClick={handleNavigate}>
          Next
        </Button>
      </main>

      <Footer />
    </div>
  );
};
export default ReserveTable;
