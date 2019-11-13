const Ingrediente = require('../models/ingredientes')

let getIngredientes = (req, res) => {
    res.send('ok');
};
let postIngrediente = (req, res) => {
    let body = req.body;
    console.log(body)
    let ingrediente = new Ingrediente({
        nombre: body.nombre,
        pesoMin: body.pesoMin,
        posAnaquel: body.posAnaquel
    });

    ingrediente.save((err, ingredienteDB) =>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(200).json({
            ok: true,
            ingrediente: ingredienteDB
        })

    });


};
let putIngrediente = (req, res) => {
    res.send('ok');
};
let getIngrediente = (req, res) => {
    res.send('ok');
};
let deleteIngrediente = (req, res) => {
    res.send('ok');
};

// Exportar funciones
module.exports = {
    getIngredientes,
    postIngrediente,
    putIngrediente,
    getIngrediente,
    deleteIngrediente
};