const db = require("../config/db");

// Add new store
exports.createStore = (req, res) => {
  const { name, email, address, rating } = req.body;

  if (!name || !email || !address || !rating) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "INSERT INTO stores (name, email, address, rating) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, address, rating], (err, result) => {
    if (err) {
      console.error("Error inserting store:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "Store created successfully", storeId: result.insertId });
  });
};

// Get all stores
exports.getAllStores = (req, res) => {
  const query = "SELECT * FROM stores";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching stores:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};

// Get store by ID
exports.getStoreById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM stores WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching store:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Store not found" });
    }
    res.json(results[0]);
  });
};

// Update store
exports.updateStore = (req, res) => {
  const { id } = req.params;
  const { name, email, address, rating } = req.body;

  const query = "UPDATE stores SET name=?, email=?, address=?, rating=? WHERE id=?";
  db.query(query, [name, email, address, rating, id], (err, result) => {
    if (err) {
      console.error("Error updating store:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Store not found" });
    }
    res.json({ message: "Store updated successfully" });
  });
};

// Delete store
exports.deleteStore = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM stores WHERE id=?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting store:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Store not found" });
    }
    res.json({ message: "Store deleted successfully" });
  });
};
