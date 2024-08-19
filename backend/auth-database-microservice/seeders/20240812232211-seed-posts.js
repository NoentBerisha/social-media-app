'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        UserId: 1,
        Content: 'Just had the best coffee in town!',
        PostDate: new Date(),
        PostType: 'text',
        LikesCount: 10,
        CommentCount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        Content: 'Check out my new mountain climbing gear!',
        PostDate: new Date(),
        PostType: 'text',
        LikesCount: 15,
        CommentCount: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
