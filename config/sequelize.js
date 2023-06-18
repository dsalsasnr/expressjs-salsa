const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "latihanedu-cruds-v2",
  host: "localhost",
  username: "root",
  password: "salsa123",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established succesfully");
  } catch (error) {
    console.log("Enable to connect to the database", error);
  }
})();

module.exports = sequelize;
