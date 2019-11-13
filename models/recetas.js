const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let recetaSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    fecha: { type: Date, default: Date.now },
    codigoSKU: {type: Number, required: [true, 'El peso es necesario'] },
    cantReceta: {type: Number, required: [true, 'la posicion en el anaquel es necesario'] },
    ingredientes:{type: Map}

})

module.exports = mongoose.model('Ingrediente', ingredienteSchema);