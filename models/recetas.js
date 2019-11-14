const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let recetaSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    fecha: { type: Date, default: Date.now },
    codigoSKU: {type: Number, required: [true, 'El codigo del SKU es necesario'] },
    cantReceta: {type: Number, required: [true, 'la cantidad de la receta es necesario'] },
    estado: { type: Boolean, default: true},
    ingredientes:{type: {}}

})

module.exports = mongoose.model('Receta', recetaSchema);