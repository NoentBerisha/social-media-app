'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'alice_smith',
        email: 'alice@example.com',
        password: 'hashed_password_here',
        profilePicture: 'https://example.com/profiles/alice.jpg',
        Bio: 'Loves to explore the city.',
        DateOfBirth: '1990-05-01',
        Gender: 'Female',
        Location: 'New York',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'bob_johnson',
        email: 'bob@example.com',
        password: 'hashed_password_here',
        profilePicture: 'https://example.com/profiles/bob.jpg',
        Bio: 'Avid mountain climber.',
        DateOfBirth: '1985-07-12',
        Gender: 'Male',
        Location: 'Los Angeles',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
