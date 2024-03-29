
//=================
//Port
//=================

process.env.PORT = process.env.PORT || 3001;

//=================
//Entorno
//=================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================
//Base de Datos
//=================

let urlDB;

if( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/crustissimo';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;