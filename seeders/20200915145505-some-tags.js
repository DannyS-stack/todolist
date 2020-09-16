"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { title: "personal", createdAt: new Date(), updatedAt: new Date() },
        { title: "urgent", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete("tags", null, {});
  },
};
