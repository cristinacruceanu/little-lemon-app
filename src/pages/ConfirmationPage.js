import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Reservation/Reservation.css";
import "../styles/ConfirmationPage.css";
import { ReservationContext } from "../context/ReservationContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationTitle from "../components/Reservation/ReservationTitle";
import Button from "../components/Button";

const BookingConfirmation = () => {
  const { formData } = useContext(ReservationContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="reserve-page">
      <Header />
      <main className="reserve-page-container">
        <ReservationTitle
          title="Little Lemon"
          subtitle="Chicago"
          description=""
        />
        <div className="confirmation-details">
          <h2 className="confirmation-title">Booking confirmed!</h2>
          <p> Thank you for your reservation! </p>
          <div className="confirmation-details reservation-data ">
            {formData?.date && (
              <p>
                <strong>Date: </strong>
                {formData.date}
              </p>
            )}

            {formData?.time && (
              <p>
                <strong>Time: </strong>
                {formData.time}
              </p>
            )}

            {formData?.diners && (
              <p>
                <strong> Diners: </strong>
                {formData.diners}
              </p>
            )}

            {formData?.occasion && (
              <p>
                <strong>Occasion: </strong>
                {formData.occasion}
              </p>
            )}

            {formData?.seating && (
              <p>
                <strong>Seating: </strong>
                {formData.seating}
              </p>
            )}
          </div>
          <p className="confirmation-note">
            We look forward to serving you. If you need any assistance, please
            feel free to contact us at{" "}
            <a href="tel:+123456789">+1 234 567 89</a> or via{" "}
            <a href="mailto:support@littlelemon.com">support@littlelemon.com</a>
            .
          </p>
        </div>
        <Button variant="primary" onClick={handleNavigate}>
          Go to Homepage
        </Button>
      </main>

      <Footer />
    </div>
  );
};
export default BookingConfirmation;
