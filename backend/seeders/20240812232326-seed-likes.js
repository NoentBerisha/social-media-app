'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Likes', [
      {
        PostId: 1,
        UserId: 1,
        CommentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        PostId: 2,
        UserId: 2,
        CommentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  },
};
