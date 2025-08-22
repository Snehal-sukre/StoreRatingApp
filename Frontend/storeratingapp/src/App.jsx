import React, { useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import UserDashboard from "./Components/User/UserDashboard";
import OwnerDashboard from "./Components/Owner/OwnerDashboard";

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogout = () => setUser(null);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            {showSignup ? "Create an Account" : "Welcome Back"}
          </h1>

          {/* Login or Signup */}
          {showSignup ? <Signup onSignup={setUser} /> : <Login onLogin={setUser} />}

          {/* Switch Link */}
          <button
            className="mt-6 ml-4 w-full text-blue-600 font-medium hover:underline transition"
            onClick={() => setShowSignup(!showSignup)}
          >
            {showSignup
              ? "Already have an account? Login"
              : "New user? Signup"}
          </button>
        </div>
      </div>
    );
  }

  // Role based dashboard
  if (user.role === "ADMIN")
    return <AdminDashboard onLogout={handleLogout} />;
  if (user.role === "OWNER")
    return <OwnerDashboard onLogout={handleLogout} />;
  return <UserDashboard onLogout={handleLogout} />;
}

export default App;
