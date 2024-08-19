'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupMembers', {
      GroupMemberId: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      GroupId: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'Groups',
          key: 'GroupId',
        },
        onDelete: 'CASCADE',
      },
      UserId: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'UserId',
        },
        onDelete: 'CASCADE',
      },
      JoinedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GroupMembers');
  }
};