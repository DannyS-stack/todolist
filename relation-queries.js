// See if you can build queries to achive the following:
const user = require("./models").user;
const todolist = require("./models").todolist;
const todoitem = require("./models").todoitem;
const tag = require("./models").tag;

// // Get one user by id with his lists.

// async function getUser(userid) {
//   const userwithlist = await user.findByPk(2, {
//     include: { model: todolist },
//   });
//   console.log(userwithlist);
// }

// // Get important TodoItems with the name of the list they belong to.

// async function importantTodo() {
//   try {
//     const important = await todoitem.findAll({
//       where: { important: false },
//       include: { model: todoList, attributes: ["name"] },
//     });
//     console.log(important);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // Get one user by id with his lists, which also contain their belonging TodoItem's task attribute.

// async function userById(id) {
//   try {
//     const important = await todoitem.findByPk(id, {
//       include: {
//         model: todoList,
//         attributes: ["name"],
//         include: { model: todoitem, attributes: ["task"] },
//       },
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// Examples of these queries and the rest of the TodoListApp we have been building so far can be found here

// Open up the relation-queries.js file again.
// Import our new tag model at the top
// add a query that finds all todoItems with their corresponding tags.
// A finished example for all we've been doing up to now can be found here

async function alltodo() {
  try {
    const itemswithtags = await todoitem.findAll({
      include: [tag],
    });
    console.log(itemswithtags);
    const cleanItems = itemswithtags.map((item) => item.get({ plain: true }));
    console.log(cleanItems);
  } catch (error) {
    console.log(error.message);
  }
}

alltodo();
