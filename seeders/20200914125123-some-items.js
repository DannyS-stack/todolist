"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoitems", [
      {
        todolistId: 1,
        task: "send emails",
        deadline: "before lunch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        todolistId: 2,

        task: "sweep the floor",
        deadline: "tomorrow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        todolistId: 3,

        task: "make a server",
        deadline: "next week",
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
