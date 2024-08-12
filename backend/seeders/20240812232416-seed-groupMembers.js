'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('GroupMembers', [
      {
        GroupId: 1,
        UserId: 1,
        JoinedDate: new Date(),
        isAdmin: true,

      },
      {
        GroupId: 1,
        UserId: 2,
        JoinedDate: new Date(),
        isAdmin: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GroupMembers', null, {});
  },
};
