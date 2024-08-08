'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Alice',
        surname: 'Smith',
        birthplace: 'New York',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob',
        surname: 'Johnson',
        birthplace: 'Los Angeles',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Charlie',
        surname: 'Williams',
        birthplace: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'David',
        surname: 'Jones',
        birthplace: 'Houston',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eve',
        surname: 'Brown',
        birthplace: 'Phoenix',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Frank',
        surname: 'Davis',
        birthplace: 'Philadelphia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Grace',
        surname: 'Miller',
        birthplace: 'San Antonio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hank',
        surname: 'Wilson',
        birthplace: 'San Diego',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ivy',
        surname: 'Moore',
        birthplace: 'Dallas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jack',
        surname: 'Taylor',
        birthplace: 'San Jose',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
