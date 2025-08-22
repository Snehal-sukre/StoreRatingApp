import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddStore = () => {
  const [store, setStore] = useState({
    name: "",
    email: "",
    address: "",
    rating: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!store.name || !store.email || !store.address || !store.rating) {
      setMessage("❌ All fields are required!");
      return;
    }

    if (store.rating < 1 || store.rating > 5) {
      setMessage("❌ Rating must be between 1 and 5.");
      return;
    }

    try {
      // ✅ Connect with Express backend API (update URL as needed)
      const response = await fetch("http://localhost:5000/api/admin/add-store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(store),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Store added successfully!");
        setStore({ name: "", email: "", address: "", rating: "" });
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
        <h2 className="text-center mb-4 text-secondary">Add New Store</h2>

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
          {/* Store Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Store Name</label>
            <input
              type="text"
              className="form-control rounded-3"
              name="name"
              placeholder="Enter store name"
              value={store.name}
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
              value={store.email}
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
              value={store.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Rating */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Rating (1-5)</label>
            <input
              type="number"
              className="form-control rounded-3"
              name="rating"
              placeholder="Enter rating"
              min="1"
              max="5"
              value={store.rating}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100 rounded-3">
            Add Store
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStore;
