const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "defaultdb", 
  "avnadmin", 
  "AVNS_fL59JzuEG5UwLjlV5I8", 
  {
    host: "mysql-2b830066-projectdbgk.e.aivencloud.com", 
    port: 18025, 
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
