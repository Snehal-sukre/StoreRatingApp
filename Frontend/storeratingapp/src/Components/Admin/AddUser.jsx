import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Connect with Express backend API
    try {
      const response = await fetch("http://localhost:5000/api/admin/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ User added successfully!");
        setFormData({ name: "", email: "", password: "", address: "" });
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4 text-secondary">Add New User</h2>

        {message && (
          <div
            className={`alert ${
              message.includes("✅") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control rounded-3"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-3"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-3"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Address</label>
            <textarea
              className="form-control rounded-3"
              name="address"
              placeholder="Enter address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100 rounded-3">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
