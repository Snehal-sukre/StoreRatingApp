import React, { useState } from "react";
import "./AdminDashboard.css"; 
import AddUser from "./AddUser";
import AddStore from "./AddStore";

const AdminDashboard = ({ onLogout }) => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "addUser":
        return <AddUser />;
      case "addStore":
        return <AddStore/>;
      case "viewUsers":
        return <h2>All Users List (coming soon)</h2>;
      case "viewStores":
        return <h2>All Stores List (coming soon)</h2>;
      default:
        return (
          <div>
            <h2>Admin Dashboard</h2>
            <p>Total Users: 10</p>
            <p>Total Stores: 5</p>
            <p>Total Ratings: 20</p>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Navbar */}
      <nav className="admin-navbar">
        <h1>Admin Dashboard</h1>
        <div>
          <button onClick={() => setActivePage("addUser")}>Add User</button>
          <button onClick={() => setActivePage("addStore")}>Add Store</button>
          <button onClick={() => setActivePage("viewUsers")}>View Users</button>
          <button onClick={() => setActivePage("viewStores")}>View Stores</button>
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="admin-main">{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;
