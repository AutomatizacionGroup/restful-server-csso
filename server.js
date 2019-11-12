const express = require('express');

const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importación del archivo index en routes
app.use(require('./routes/routes'))

app.listen(port, ()=> {
    console.log(`Escuchando por el puerto ${port}`);
});
