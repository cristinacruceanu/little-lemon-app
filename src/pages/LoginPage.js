import React, { useState } from "react";
import "./../styles/Login/Login.css";
import Header from "./../components/Header";
import ReservationTitle from "./../components/Reservation/ReservationTitle";
import FormField from "./../components/FormField";
import Footer from "./../components/Footer";
import Button from "./../components/Button";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    request: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="login-page">
      <Header />
      <main className="login-page-container">
        <ReservationTitle
          title="Little Lemon"
          subtitle="Chicago"
          description="Sign in to collect points"
        />
        <FormField type="text"></FormField>
        Lorem ipsum dolor sit harum!
        <div className="login-content"></div>
      </main>

      <Button />
      <Footer />
    </div>
  );
};
export default LoginPage;
