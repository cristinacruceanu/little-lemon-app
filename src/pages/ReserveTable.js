import React from "react";
import "./../styles/Reservation/Reservation.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import ReservationTitle from "../components/Reservation/ReservationTitle";
import ReservationImages from "../components/Reservation/ReservationImages";
import ReservationForm from "../components/Reservation/ReservationForm";
import ReservationButton from "../components/Reservation/ReservationButton";
import RestaurantImg from "./../assets/icons_assets/restaurant.jpg";
import ChefBImg from "./../assets/icons_assets/restaurant-chef-b.jpg";

const ReserveTable = () => {
  return (
    <div className="reserve-page">
      <Header />
      <main className="reserve-page-container">
        <div className="reserve-page-content">
          <div className="reserve-content-left">
            <ReservationImages image1={RestaurantImg} image2={ChefBImg} />
          </div>
          <div className="reserve-content-right">
            <ReservationTitle
              title="Little Lemon"
              subtitle="Chicago"
              description="Find a table for any occasion"
            />
            <ReservationForm />
          </div>
        </div>
        <ReservationButton
          label="Next"
          onClick={() => console.log("Go to next page")}
        />
      </main>

      <Footer />
    </div>
  );
};
export default ReserveTable;
