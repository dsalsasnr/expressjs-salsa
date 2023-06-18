const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "salsa123",
  database: "latihanedu-cruds",
});

module.exports = connection;
