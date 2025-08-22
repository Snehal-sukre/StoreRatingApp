import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake role-based login
    if (email === "admin@example.com" && password === "Admin@123") {
      onLogin({ role: "ADMIN", name: "System Admin" });
      setMessage("✅ Logged in as Admin");
    } else if (email === "owner@example.com" && password === "Owner@123") {
      onLogin({ role: "OWNER", name: "Store Owner" });
      setMessage("✅ Logged in as Store Owner");
    } else if (email === "user@example.com" && password === "User@123") {
      onLogin({ role: "USER", name: "Normal User" });
      setMessage("✅ Logged in as User");
    } else {
      setMessage("❌ Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: "420px", margin: "auto" }}>
        <h2 className="text-center mb-4 text-secondary">Login</h2>

        {/* Alert Message */}
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
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100 rounded-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
