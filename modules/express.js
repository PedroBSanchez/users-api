const express = require("express");
const { use } = require("express/lib/application");
const UserModel = require("../src/models/user.model.js");

const app = express();
app.use(express.json());

//Implementar métodos HTTPS (POST, PUT, GET, DELETE)

app.post("/users", async (req, res) => {
  try {
    const users = await UserModel.create(req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(erro.message);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//findAll
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//findByID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Subir servidor
const port = 8080;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
