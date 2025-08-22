const db = require("../config/db");

const User = {
  create: (data, callback) => {
    const sql = "INSERT INTO users (name, email, password, address, role) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [data.name, data.email, data.password, data.address, data.role], callback);
  },

  getAll: (callback) => {
    const sql = "SELECT * FROM users";
    db.query(sql, callback);
  }
};

module.exports = User;
