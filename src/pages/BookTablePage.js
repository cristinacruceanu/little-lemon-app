import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Reservation/Reservation.css";
import { ReservationContext } from "../context/ReservationContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationTitle from "../components/Reservation/ReservationTitle";
import ReservationForm from "../components/Reservation/ReservationForm";
import Button from "../components/Button";

const ReserveTable = () => {
  const { reservationData } = useContext(ReservationContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/booking-confirmation");
  };
  console.log("reservationData", reservationData);
  return (
    <div className="reserve-page">
      <Header />
      <main className="reserve-page-container">
        <ReservationTitle
          title="Little Lemon"
          subtitle="Chicago"
          description="Find a table for any occasion"
        />
        <div className="reservation-content">
          <ReservationForm />
          <div>
            <h1>Reservation Details</h1>
            <p>Date: {reservationData.date}</p>
            <p>Time: {reservationData.time}</p>
            <p>Guests: {reservationData.diners}</p>
          </div>
        </div>
        <Button variant="primary" onClick={handleNavigate}>
          Next
        </Button>
      </main>

      <Footer />
    </div>
  );
};
export default ReserveTable;
