const express = require('express');
const app = express();
const control = require('../controllers/controllers')

app.get('/ingredientes/lista', control.getIngredientes)

app.post('/ingredientes/ingrediente', control.postIngrediente);

app.put('/ingredientes/ingrediente/:id', control.putIngrediente);

app.get('/ingredientes/ingrediente/:id', control.getIngrediente);

app.delete('/ingredientes/ingrediente/:id', control.deleteIngredientes);

module.exports = app;