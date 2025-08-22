import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  validateName,
  validateAddress,
  validateEmail,
  validatePassword,
} from "../utils/validations";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err =
      validateName(form.name) ||
      validateEmail(form.email) ||
      validateAddress(form.address) ||
      validatePassword(form.password);

    if (err) {
      setError(err);
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("✅ User Registered Successfully!");
    console.log("New User:", form);

    // Reset form
    setForm({ name: "", email: "", address: "", password: "" });
  };

  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg p-4 rounded-4"
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <h2 className="text-center mb-4 text-secondary">Signup</h2>

        {/* Success & Error Messages */}
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="form-control rounded-3"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-control rounded-3"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="form-control rounded-3"
              rows="3"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter a strong password"
              className="form-control rounded-3"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 rounded-3">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
