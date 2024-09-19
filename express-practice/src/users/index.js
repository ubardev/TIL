import { Router } from "express";

// Router
class UserController {
  router;
  users = [{ id: 1, name: "ubar", age: 12 }];
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/", this.getUsers.bind(this));
    this.router.get("/detail/:id", this.getUser.bind(this));
    this.router.post("/", this.createUser.bind(this));
  }

  getUsers(req, res) {
    res.status(200).json({ users: this.users });
  }

  getUser(req, res) {
    const { id } = req.params;
    const user = this.users.find((user) => user.id === Number(id));
    res.status(200).json({ user });
  }

  createUser(req, res) {
    const { name, age } = req.body;

    this.users.push({
      id: new Date().getTime(),
      name,
      age,
    });

    res.status(201).json({ users: this.users });
  }
}

const userController = new UserController();
export default userController;
