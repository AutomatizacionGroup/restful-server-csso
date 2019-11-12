const express = require('express');
const app = express();
const ingredientes = require('../controllers/ingredientes')
const recetas = require('../controllers/recetas')
const ordenes = require('../controllers/ordenes')

// Ingredientes
app.get('/ingredientes/lista', ingredientes.getIngredientes)

app.post('/ingredientes/ingrediente', ingredientes.postIngrediente);

app.put('/ingredientes/ingrediente/:id', ingredientes.putIngrediente);

app.get('/ingredientes/ingrediente/:id', ingredientes.getIngrediente);

app.delete('/ingredientes/ingrediente/:id', ingredientes.deleteIngrediente);

// Recetas
app.post('/recetas/sku', recetas.postReceta);

app.put('/recetas/sku/:id', recetas.putReceta);

app.get('/recetas/lista', recetas.getRecetas);

app.get('/recetas/sku/:id', recetas.getReceta);

app.delete('/recetas/sku/:id', recetas.deleteReceta);

// Ordenes
app.get('/ordenes/lista', ordenes.getOrdenes)

app.post('/ordenes/orden', ordenes.postOrden);

app.put('/ordenes/orden/:id', ordenes.putOrden);

app.get('/ordenes/orden/:id', ordenes.getOrden);

app.delete('/ordenes/orden/:id', ordenes.deleteOrden);

module.exports = app;