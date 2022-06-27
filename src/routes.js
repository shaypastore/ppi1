// Importando as dependências do projeto
const express = require('express');
const routes = express.Router();
// Referencia o Controller PokeController
const PokeController =
require('./controllers/PokeController');
// associa as rotas ao seu método do Controller
routes.get('/pokes',PokeController.index);
routes.get('/pokes/:id',PokeController.show);
routes.post('/pokes',PokeController.store);
routes.put('/pokes/:id',PokeController.update);
routes.delete('/pokes/:id',PokeController.delete);
module.exports = routes;