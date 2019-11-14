const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let ingredienteSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    fecha: { type: Date, default: Date.now },
    proporcion: {type: [Number], required: [true, 'El peso es necesario'], of: Float32Array },
    posAnaquel: {type: Array, required: [true, 'la posicion en el anaquel es necesario'] },
    cont: {type: [Number], required: [true, 'indicar cuantas unidadeds de agregaron es necesario'] },
    estado: { type: Boolean, default: true}

})

module.exports = mongoose.model('Ingrediente', ingredienteSchema);