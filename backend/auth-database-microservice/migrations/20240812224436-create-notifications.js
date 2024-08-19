'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notifications', {
      NotificationId: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
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
      NotificationType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      RelatedEntityId: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
      },
      IsRead: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      NotificationDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Notifications');
  }
};