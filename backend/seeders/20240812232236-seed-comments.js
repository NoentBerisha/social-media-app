'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        PostId: 1,
        UserId: 2,
        Content: 'That sounds amazing!',
        LikesCount: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        PostId: 2,
        UserId: 1,
        Content: 'Nice! Where did you get it?',
        LikesCount: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
