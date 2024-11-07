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
    phoneNumber: "",
    email: "",
    password: "",
    additionalDetails: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "First name field is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last name field is required";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number field is required";
    }
    if (!formData.email) {
      errors.email = "Email field is required";
    }
    if (!formData.password) {
      errors.password = "Password field is required";
    }
    if (!formData.additionalDetails) {
      errors.additionalDetails = "Textarea error";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("User Data:", formData);
      navigate("/book-table-page");
    } else {
      console.log("Validation errors:", errors);
    }
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
              value={formData.firstName || ""}
              onChange={handleChange}
              required={true}
            />
            <FormField
              label="Last Name"
              name="lastName"
              type="text"
              value={formData.lastName || ""}
              onChange={handleChange}
              required={true}
            />
            <FormField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              pattern="[0-9]{4} [0-9]{3} [0-9]{3}"
              placeholder="E.g. 0123-456-789"
              value={formData.phoneNumber || ""}
              onChange={handleChange}
              required={true}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email || ""}
              onChange={handleChange}
              required={true}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              value={formData.password || ""}
              onChange={handleChange}
              minLength="6"
              required={true}
            />
            <FormField
              label="Additional Details"
              name="additionalDetails"
              value={formData.additionalDetails || ""}
              onChange={handleChange}
              textarea={true}
              rows={5}
            />
            <Button ariaLabel="Submit Form" type="submit" variant="primary">
              Continue
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default LoginPage;
