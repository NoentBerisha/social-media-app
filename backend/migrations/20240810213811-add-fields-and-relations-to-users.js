"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add new fields
    await queryInterface.addColumn("Users", "email", {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    });

    await queryInterface.addColumn("Users", "age", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    // Establish relationship with another entity (e.g., Roles)
   
  },

  async down(queryInterface, Sequelize) {
    // Remove the added fields
    await queryInterface.removeColumn("Users", "email");
    await queryInterface.removeColumn("Users", "age");

    
  },
};