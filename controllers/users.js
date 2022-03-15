/**
Se deben colocar los metodos que seran llamados en las rutas
Ejemplo de método
  const metodo = (req, res, next) => {
	// Lineas de codigo del metodo
  };
*/
const usersModel = require("../models/users");

const getUsers = (req, res, next) => {
	usersModel.obtener().then(usuarios => {
    var us = usuarios
    res.send(us)
    })
    .catch(err => {
        return res.status(500).send(err);
    });
};

const getById = (req, res, next) => {
  console.log(req.params.id)
	usersModel.obtenerPorId(req.params.id).then(usuarios => {
    var us = usuarios.nombre//[req.params.id]
    res.send(us)
    })
    .catch(err => {
        return res.status(500).send(err);
    });
};

const updateUserById = (req, res, next) => {
  console.log(req.params.id)
	usersModel.obtenerPorId(req.params.id).then(usuarios => {
    var us = usuarios.nombre//[req.params.id]
    res.send(us)
    })
    .catch(err => {
        return res.status(500).send(err);
    });
};

const addUser = (req, res, next) => {
  console.log(req)
  var w = req.data
  console.log(typeof(w))
  console.log(w)
	/*usersModel.obtenerPorId(req.params.id).then(usuarios => {
    var us = usuarios.nombre//[req.params.id]
    res.send(us)
    })
    .catch(err => {
        return res.status(500).send(err);
    });*/
    res.send("si")
};

module.exports = {
  //Aqui van los nombres de los métodos separados por coma
  getUsers,
  getById,
  addUser
};