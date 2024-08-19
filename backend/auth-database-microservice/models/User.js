"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      UserId: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Bio: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      DateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      Gender: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Location: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: true, 
    }
  );

  return User;
};
