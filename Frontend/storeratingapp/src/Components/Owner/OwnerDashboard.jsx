import React from "react";

const OwnerDashboard = ({ onLogout }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Store Owner Dashboard</h2>
      <p>View your store ratings and feedback here.</p>
      <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">Logout</button>
    </div>
  );
};

export default OwnerDashboard;
