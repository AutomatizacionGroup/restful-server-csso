require('../config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importación del archivo index en routes
app.use(require('./../routes/routes'))

mongoose.set('useCreateIndex', true)

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }, (err, resp) => {

    if (err) throw err;

    console.log('base de datos ONLINE');

});

app.listen(process.env.PORT, ()=> {
    console.log(`Escuchando por el puerto ${process.env.PORT}`);
});