const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let ingredienteSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    fecha: { type: Date, default: Date.now },
    pesoMin: {type: Number, required: [true, 'El peso es necesario'] },
    posAnaquel: {type: String, required: [true, 'la posicion en el anaquel es necesario'] },

})

module.exports = mongoose.model('Ingrediente', ingredienteSchema);