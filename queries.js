const user = require("./models").user;
const todolist = require("./models").todolist;
const todoitem = require("./models").todoitem;

// Searches for all users and logs them.

async function findAllUsers() {
  try {
    const results = await user.findAll();
    console.log(results);
  } catch (error) {
    console.log(error.message);
  }
}

// Searches for all TodoItems and logs them (use plain: true).
async function logToDoItems() {
  try {
    const results = await todolist.findAll();
    results.map((result) => {
      console.log(result.get({ plain: true }));
    });
  } catch (error) {
    console.log(error.message);
  }
}

// Searches for a user by primary key.
async function findUserByPk() {
  try {
    const userByPk = await user.findByPk(3);
    console.log(userByPk);
  } catch (error) {
    console.log(error.message);
  }
}

// Creates a new user.
//  (Once you manage to create this user, delete or comment the function
//   call as to no run it again, if not we we'll get an error).

async function createNewUser() {
  try {
    const rambo = await user.create({
      name: "Rambo",
      email: "badass@johnrambo.com",
      phone: 1234325,
      password: "livefornothingordieforsomething",
    });
  } catch (error) {
    console.log(error.message);
  }
}

// Searches only for important TodoItems
async function findImportantToDo() {
  try {
    const importantToDo = await todoitem.findAll({
      where: { important: true },
    });
    console.log(importantToDo);
  } catch (error) {
    console.log(error.message);
  }
}
