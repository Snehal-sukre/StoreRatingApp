import React from "react";

const UserDashboard = ({ onLogout }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <p>Here you can browse stores and submit ratings.</p>
      <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">Logout</button>
    </div>
  );
};

export default UserDashboard;
