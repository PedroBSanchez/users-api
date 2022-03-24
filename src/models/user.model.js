const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  pais: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("User", userScheme);

module.exports = userModel;
