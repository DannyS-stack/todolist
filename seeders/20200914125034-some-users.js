"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Leo Messi",
        email: "leo@messi.com",
        phone: 1234567,
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dan Abramov",
        email: "dan@redux.com",
        phone: 1234567,
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "hans kazan",
        email: "hans@redux.com",
        phone: 565357,
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
