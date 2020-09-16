"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "itemTags",
      [
        {
          tagId: "1",
          todoitemId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: "1",
          todoitemId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: "1",
          todoitemId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: "3",
          todoitemId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: "2",
          todoitemId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: "2",
          todoitemId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete("itemTags", null, {});
  },
};
