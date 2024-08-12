'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notifications', [
      {
        UserId: 1,
        NotificationType: 'like',
        RelatedEntityId: 1,
        IsRead: false,
        NotificationDate: new Date(),
      },
      {
        UserId: 2,
        NotificationType: 'comment',
        RelatedEntityId: 2,
        IsRead: true,
        NotificationDate: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notifications', null, {});
  },
};
