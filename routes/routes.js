const express = require('express');
const app = express();
const ingredientes = require('../controllers/ingredientes')
const recetas = require('../controllers/recetas')

app.get('/ingredientes/lista', ingredientes.getIngredientes)

app.post('/ingredientes/ingrediente', ingredientes.postIngrediente);

app.put('/ingredientes/ingrediente/:id', ingredientes.putIngrediente);

app.get('/ingredientes/ingrediente/:id', ingredientes.getIngrediente);

app.delete('/ingredientes/ingrediente/:id', ingredientes.deleteIngredientes);


app.post('/recetas/sku', recetas.postReceta);

app.put('/recetas/sku/:id', recetas.putReceta);

app.get('/recetas/lista', recetas.getRecetas);

app.get('/recetas/sku/:id', recetas.getReceta);

app.delete('/recetas/sku/:id', recetas.deleteReceta);

module.exports = app;