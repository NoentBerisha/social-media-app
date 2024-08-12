'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Followers', [
      {
        followerId: 1,
        followingId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 2,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Followers', null, {});
  },
};
