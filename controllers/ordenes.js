const Orden = require('../models/ordenes')
const Receta = require('../models/recetas')
const Ingrediente = require('../models/ingredientes')

let getOrdenes = (req, res) => {
    Orden.find({})
        .exec((err, ordenesDB) =>{

            if (err) {
                return res.status(400).json({
                    ok:false,
                    err
                })
            };

            res.status(200).json({
                ok: true,
                ordenesDB
            });
        })
};

let postOrden = (req, res) => {
    let body = req.body;
    
    let orden = new Orden({
        codigoSKU: body.codigoSKU,
        cantidad: body.cantidad
    });

    orden.save((err, ordenDB) =>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            receta: ordenDB
        });
    });
};

let putOrden = (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Orden.findByIdAndUpdate(id, body, {new:true, runValidators: true}, (err, ordenModificada)=>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });

        };

        res.json({
            ok: true,
            ordenModificada
        })
    })
};

let getOrden = (req, res) => {
    let id = req.params.id;

    Orden.findById(id, (err, ordenDB)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        };

        res.status(200).json({
            ok: true,
            ordenDB
        })
    })
};

let deleteOrden = (req, res) => {
    let id = req.params.id;
    let cambioEstado = {
        estado: false
    }

    Orden.findByIdAndUpdate(id, cambioEstado, {new:true, runValidators: true}, (err, ordenInhabilitada)=>{

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json({
            ok: true,
            ordenInhabilitada
        })
    })
};

// Exportar funciones
module.exports = {
    getOrdenes,
    postOrden,
    putOrden,
    getOrden,
    deleteOrden
};