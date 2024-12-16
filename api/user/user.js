const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source");

class User extends Model {}
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otp:{
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

module.exports = User; 
