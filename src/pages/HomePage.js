import React from "react";
import "./../styles/HomePage.css";
import CallToAction from "./../components/CallToAction";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Specials from "./../components/Specials.js";
import ImageUrl from "./../assets/icons_assets/restaurant-food.jpg";
import GreekSalad from "./../assets/icons_assets/greek-salad.jpg";
import Bruschetta from "./../assets/icons_assets/bruschetta.svg";
import LemonDessert from "./../assets/icons_assets/lemon-dessert.jpg";
import OrderIcon from "./../assets/icons_assets/motorcycle.png";
import Testimonials from "./../components/Testimonials";
import JohnDoe from "./../assets/icons_assets/john-doe.jpg";
import JaneSmith from "./../assets/icons_assets/jane-smith.jpg";
import CarlosSantana from "./../assets/icons_assets/carlos-santana.jpg";

const HomePage = () => {
  const handleOrder = () => {
    console.log("Order placed!");
  };
  const weeklySpecials = [
    {
      dishName: "Greek Salad",
      imageSrc: GreekSalad,
      description: "Crispy lettuce, peppers, olives, feta cheese.",
      price: 12.99,
    },
    {
      dishName: "Bruschetta",
      imageSrc: Bruschetta,
      description: "Grilled bread, garlic, tomatoes, olive oil.",
      price: 7.99,
    },
    {
      dishName: "Lemon Dessert",
      imageSrc: LemonDessert,
      description: "Sweet and sour, deliciously lemony dessert.",
      price: 5.49,
    },
  ];
  const testimonialsData = [
    {
      customerName: "John Doe",
      customerImage: JohnDoe,
      feedback: "The service was excellent and the food was delicious!",
      location: "New York, USA",
      rating: 5,
    },
    {
      customerName: "Jane Smith",
      customerImage: JaneSmith,
      feedback: "Very satisfied with the experience.",
      location: "London, UK",
      rating: 4,
    },
    {
      customerName: "Carlos Santana",
      customerImage: CarlosSantana,
      feedback: "The best Mediterranean restaurant I have ever been to!",
      location: "Madrid, Spain",
      rating: 5,
    },
  ];
  return (
    <div className="page-container">
      <Header/>
      <main>
        <CallToAction
          title="Little Lemon"
          location="Chicago"
          description="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
          buttonText="Reserve a table"
          imageUrl={ImageUrl}
          imageAlt="Restaurant food"
        />
        <Specials
          sectionTitle="This weeks specials!"
          buttonText="Online Menu"
          specials={weeklySpecials}
          onAction={handleOrder}
          actionText="Order a delivery"
          icon={<img src={OrderIcon} alt="DeliveryIcon" />}
        />
        <Testimonials
          title="What our customers say"
          testimonials={testimonialsData}
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
