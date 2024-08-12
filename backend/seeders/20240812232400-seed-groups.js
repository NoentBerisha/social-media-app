'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Groups', [
      {
        GroupName: 'Nature Lovers',
        GroupDescription: 'A group for people who love nature.',
        AdminUserId: 1,
        CreatedDate: new Date(),
        MemberCount: 10,
      },
      {
        GroupName: 'Tech Enthusiasts',
        GroupDescription: 'Discuss the latest in technology.',
        AdminUserId: 2,
        CreatedDate: new Date(),
        MemberCount: 8,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Groups', null, {});
  },
};
