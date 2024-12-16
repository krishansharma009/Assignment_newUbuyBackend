const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "bgv", 
  "root", 
  "", 
  {
    host: "localhost", 
    port: 3306, 
    dialect: "mysql",
    dialectModule: require("mysql2"),
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  });

module.exports = sequelize;
