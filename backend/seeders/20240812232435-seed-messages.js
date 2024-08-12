'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Messages', [
      {
        SenderUserId: 1,
        ReceiverUserId: 2,
        Content: 'Hey, how are you?',
        sentDate: new Date(),
        isRead: false,
      },
      {
        SenderUserId: 2,
        ReceiverUserId: 1,
        Content: 'I am good, thanks!',
        sentDate: new Date(),
        isRead: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
  },
};
