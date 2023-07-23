import React, { useState } from 'react';

const BookingForm = ({ movieName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the user details in local/session storage
    // You can choose either local storage or session storage based on your needs
    localStorage.setItem('userData', JSON.stringify(formData));
    // Clear the form data after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className="popup">
      <div className="popup-content">
      <button className="close-btn" onClick={onClose}>
      &times;
    </button>
        <h2>Booking Form</h2>
        <p>Movie Name: {movieName}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Book Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
