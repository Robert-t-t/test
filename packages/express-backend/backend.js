import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor",
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer",
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor",
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress",
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender",
    }
  ]
};

// Step 4 - Getting users by Name
// Step 7 - Get user(s) by name and Job
const findUserByName = (name) => {
  return users["users_list"].filter((user) => user["name"] === name);
};

// find user by name and job
const findUserByNameAndJob = (name, job) => {
  return users["users_list"].filter(
    (user) => user["name"] === name && user["job"] === job
  );
};

app.get("/users", (req, res) => {
  //console.log("Hello i am in the users");
  const name = req.query.name;
  const job = req.query.job;
  //console.log(`This is the name: ${name}`)
  //console.log(`This is the job ${job}`);
  if (name != undefined && job != undefined) {
    //console.log("I am in the namd and job");
    let result = findUserByNameAndJob(name, job);
    result = { users_list: result };
    res.send(result);
  } else if (name != undefined) {
    //console.log("I am in the name")
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else {
    //console.log("i am in the all user")
    res.send(users);
  }
});

// Step 5 - Getting users by id
const findUserById = (id) =>
  users["users_list"].find((user) => user["id"] === id);

app.get("/users/:id", (req, res) => {
  //console.log("Hello i am in the user/:id line 69");
  const id = req.params["id"];
  let result = findUserById(id);
  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);
  }
});

// Step 6 - Using the POST
const addUser = (user) => {
  users["users_list"].push(user);
  //console.log("Hello i am the add user function");
  return user;
};

app.post("/users", (req, res) => {
  const userToAdd = req.body;

  if(userToAdd["id"] === undefined){
    userToAdd["id"] = `${Math.random()}`;
  }
  addUser(userToAdd);
  res.status(201).send(userToAdd);
});

// step 7
// Delete
const delUserById = (id) => {
  return users["users_list"].filter((user) => user["id"] != id);
};

app.delete("/users/:id", (req, res) => {
  console.log("Hello i an im delete")
  const id = req.params["id"];
  let result = findUserById(id);

  console.log(`This is the current id ${id}`)
  console.log(`This is the current result ${result}`)
  if (result === undefined) {
    console.log("Faild")
    res.status(404).send("User not found");
  } else {
    users["users_list"] = delUserById(id);
    //console.log(users["users_list"]);
    res.status(204).send("Delete Request Call");
  }
});
