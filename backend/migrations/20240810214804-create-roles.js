"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create Roles table
    await queryInterface.createTable("Roles", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      roleName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });

    // Add roleId column to Users table
    await queryInterface.addColumn("Users", "roleId", {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    });

    // Add foreign key constraint
    await queryInterface.addConstraint("Users", {
      fields: ["roleId"],
      type: "foreign key",
      name: "fk_users_roles",
      references: {
        table: "Roles",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove foreign key constraint
    await queryInterface.removeConstraint("Users", "fk_users_roles");

    // Remove roleId column from Users table
    await queryInterface.removeColumn("Users", "roleId");

    // Drop Roles table
    await queryInterface.dropTable("Roles");
  },
};