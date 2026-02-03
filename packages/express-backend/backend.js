import express from "express";
import cors from "cors";
import userService from "./user-services.js";

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

// find user by name and job
app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  userService.getUsers(name,job)
             .then(users =>{
              res.json({users_list: users});
             })
             .catch(err =>{
              console.log(err);
              res.status(500).send("Server error")
             });
});

//Getting users by id
app.get("/users/:id", (req, res) => {
  const id = req.params["id"];

  userService.findUserById(id)
    .then(user => {

      if(!user){
        return res.status(404).send("can not be found");
      }
      res.json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Server error")
    });
});

// Using the POST
app.post("/users", (req, res) => {
  const userToAdd = req.body;

  userService.addUser(userToAdd)
             .then(Adduser => {
              res.status(201).json(Adduser);
             })
             .catch(err => {
              res.status(500).send("Server error");
             })
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];

  userService.deleteUserById(id)
             .then(delUser =>{
                if(!delUser){
                  return res.status(404).send("User not found");
                }
                res.status(204).send("Delete Request Call")
             })
             .catch(err => {
              console.log(err);
              res.status(500).send("Server error");
             });
});