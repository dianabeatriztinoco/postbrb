'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
    {
      username:'aleckeeler99',
      email: 'aleckeeler@postbrb.com',
      hashedPassword: '$2a$10$zR2Fi5nXkNPH9occMIpHAeZMyfpnIUlt7ROI0uOeN2vf1G9vbl2Um',
      avatarUrl: '/assets/avatars/woman.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'diana',
      email: 'diana@diana.com',
      hashedPassword: '$2a$10$zyIV520tmREcZDPpNXqwO.wB/vFRyeg9Dx.OltkLzvFvJtlmH/9mW',
      avatarUrl: '/assets/avatars/woman.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'jun',
      email: 'jun@jun.com',
      hashedPassword: '$2a$10$$2a$10$Q9AYJCayVQMZfVle11dqw.4iJgOCA72gZvxrb60pAhVD2BPjrQhd2',
      avatarUrl: '/assets/avatars/woman.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'demo',
      email: 'demo@demo.co',
      hashedPassword: '$2a$10$jF57y3oPfZRXhepAHcVld.oQlCqyAIDxj8lX4924/PO3xXu4PEBGm',
      avatarUrl: '/assets/avatars/woman.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'kagen',
      email: 'kagen@kagen.com',
      hashedPassword: '$2a$10$zyG6yLMuGcYQNthkeGum4eQUizgiMyQJzIFrI4P8ioJTk45zgu.h2',
      avatarUrl: '/assets/avatars/woman.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
