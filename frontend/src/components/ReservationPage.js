import React, { useState } from "react";
import "../App.css"; // Import the CSS file for styling

const ReservationForm = ({ isLoggedIn }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    paymentMethod: "Visa",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  // if (!isLoggedIn) {
  //   return <p>Please log in to make a reservation.</p>;
  // }

  return (
    <div>
      <h1>Your Booking Information</h1>
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="form-control"
          >
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Paypal">Paypal</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Make Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
