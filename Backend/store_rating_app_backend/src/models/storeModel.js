const db = require("../config/db");

const Store = {
  create: (data, callback) => {
    const sql = "INSERT INTO stores (name, email, address, rating) VALUES (?, ?, ?, ?)";
    db.query(sql, [data.name, data.email, data.address, data.rating], callback);
  },

  getAll: (callback) => {
    const sql = "SELECT * FROM stores";
    db.query(sql, callback);
  }
};

module.exports = Store;
