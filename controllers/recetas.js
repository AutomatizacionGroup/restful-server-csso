const Receta = require('../models/recetas')

let getRecetas = (req, res) => {

    Receta.find({})
        .exec((err, recetasDB) =>{

            if (err) {
                return res.status(400).json({
                    ok:false,
                    err
                })
            };

            res.status(200).json({
                ok: true,
                recetasDB
            });
        })
};

let postReceta = (req, res) => {
    let body = req.body;
    // console.log(body)
    let receta = new Receta({
        nombre: body.nombre,
        codigoSKU: body.codigoSKU,
        cantReceta: body.cantReceta,
        ingredientes: body.ingredientes
    });

    receta.save((err, recetaDB) =>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            receta: recetaDB
        });
    });
};

let getReceta = (req, res) => {
    
    let id = req.params.id;

    Receta.findById(id, (err, recetaDB)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        };

        res.status(200).json({
            ok: true,
            recetaDB
        })
    })
};

let putReceta = (req, res) => {
    
    let id = req.params.id;
    let body = req.body;

    Receta.findByIdAndUpdate(id, body, {new:true, runValidators: true}, (err, recetaModificada)=>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });

        };

        res.json({
            ok: true,
            recetaModificada
        })
    })
};


let deleteReceta = (req, res) => {
    
    let id = req.params.id;
    let cambioEstado = {
        estado: false
    }

    Receta.findByIdAndUpdate(id, cambioEstado, {new:true, runValidators: true}, (err, recetaInhabilitada)=>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json({
            ok: true,
            recetaInhabilitada
        })
    })
};


module.exports = {
    getRecetas, getReceta, postReceta, putReceta, deleteReceta
}
