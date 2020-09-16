const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const TodoList = require("./models").todolist;
const User = require("./models").user;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/echo", (req, res) => {
  res.json(req.body);
});

//create new User
app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("must have a valid email");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});
app.listen(PORT, console.log("i'm listening"));

// Add a route definition that will respond to GET requests to /users/:userId.
//  Use the User.findByPk() method along with the userId route parameter.
//   Fetch the correct user from the database and return it as a JSON response.

app.get("/users/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) {
      return res.status(404).send("put the right id in there you dummo");
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

// Exercise: Implement the "create" and "update" actions on todoLists
// Continue with the Node.js project from the previous exercise.
// Import the todoList model.

// Implement a GET endpoint for all todoLists.
app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    console.log("running");
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    console.log("user:", user);

    if (user) {
      res.send(user.todolists);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

// Implement the POST and PUT handlers for the todoLists, use the ones we defined for user as a starting point
// The endpoints could be /todoLists and todoLists/:listId for example.

app.post("/todolists", async (req, res, next) => {
  try {
    const listname = req.body.name;
    if (!listname) {
      return res.status(400).send("list needs to have a name");
    }
    const newlist = await TodoList.create(req.body);
    res.json(newlist);
  } catch (error) {
    next(e);
  }
});

app.put("/todolists/:listId", async (req, res, next) => {
  try {
    const specificList = await TodoList.findByPk(req.params.listId);
    console.log("specificlist", specificList);
    if (!specificList) {
      return res.status(404).send("list not found");
    }

    const updatedList = await specificList.update(req.body);
    console.log("updatedlist", updatedList);

    res.json(updatedList);
  } catch (error) {
    next(e);
  }
});

// Try them out. Remember, to create todoLists we are going to have to send a valid userId in the request.
// If you are stuck, or want to see a completed solution, look at this file.
