import React, { useState } from "react";
import "./../styles/Login/Login.css";
import { useNavigate } from "react-router-dom";
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
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="login-page">
      <Header />
      <main className="login-page-container">
        <div className="login-content">
          <ReservationTitle
            title="Little Lemon"
            subtitle="Chicago"
            description="Sign in to collect points"
          />
          <form className="login-form" onSubmit={handleSubmit}>
            <FormField
              label="First Name"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <FormField
              label="Last Name"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <FormField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
            <FormField
              label="Additional Details"
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              textarea={true}
              rows={5}
            />
          </form>
        </div>
        <Button
          ariaLabel="Submmit Form"
          type="submit"
          variant="primary"
          onClick={handleNavigate}
        >
          Continue
        </Button>
      </main>

      <Footer />
    </div>
  );
};
export default LoginPage;
