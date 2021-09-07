const express = require('express');

module.exports = function (server) {
    /*
    /*
    * API Públicas - rotas abertas
    */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const EmpresaController = require('../controllers/Empresa/EmpresaController');
    openApi.get('/empresas', EmpresaController.findAll);

    const MeuipController = require('../controllers/General/MeuipController');
    openApi.get('/ip/create', MeuipController.create);
    openApi.get('/ip/summary', MeuipController.summary);
    openApi.get('/ip/contador', MeuipController.contador);

}

