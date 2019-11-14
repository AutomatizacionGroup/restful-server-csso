const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ordenSchema = new Schema({

    fecha: { type: Date, default: Date.now },
    codigoSKU: {type: Number, required: [true, 'El codigo SKU es necesario'] },
    cantidad: {type: Number, required: [true, 'la cantidad de panes es necesario'] },
    estado: { type: Boolean, default: true},

})

module.exports = mongoose.model('Orden', ordenSchema);