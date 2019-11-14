const Ingrediente = require('../models/ingredientes')

let getIngredientes = (req, res) => {

    Ingrediente.find({})
        .exec((err, ingredientesDB) =>{

            if (err) {
                return res.status(400).json({
                    ok:false,
                    err
                })
            };

            res.status(200).json({
                ok: true,
                ingredientesDB
            });
            
        })

};

let postIngrediente = (req, res) => {
    let body = req.body;
    console.log(body)
    let ingrediente = new Ingrediente({
        nombre: body.nombre,
        proporcion: body.proporcion,
        posAnaquel: body.posAnaquel,
        cont: body.cont
    });

    ingrediente.save((err, ingredienteDB) =>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            ingrediente: ingredienteDB
        })

    });

};

let getIngrediente = (req, res) => {
    
    let id = req.params.id;

    Ingrediente.findById(id, (err, ingredienteDB)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        };

        res.status(200).json({
            ok: true,
            ingredienteDB
        })
    })

};

let putIngrediente = (req, res) => {
    
    let id = req.params.id;
    let body = req.body;

    Ingrediente.findByIdAndUpdate(id, body, {new:true, runValidators: true}, (err, ingredienteModificado)=>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });

        };

        res.json({
            ok: true,
            ingredienteModificado
        })

    })

};


let deleteIngrediente = (req, res) => {
    
    let id = req.params.id;
    let cambioEstado = {
        estado: false
    }

    Ingrediente.findByIdAndUpdate(id, cambioEstado, {new:true, runValidators: true}, (err, ingredienteInhabilitado)=>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json({
            ok: true,
            ingredienteInhabilitado
        })

    })

};

// Exportar funciones
module.exports = {
    getIngredientes,
    postIngrediente,
    putIngrediente,
    getIngrediente,
    deleteIngrediente
};