'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = 3000;
app.set('port',port);

const server = http.createServer(app);
const router = express.Router();

var route = router.get('/',(req,res,next) =>{ //rota padrao
    res.status(200).send({
        title: `testando api`,
        version: `1`
    });
});

app.use(`/`, route); //barra como prefixo apenas

server.listen(port);
console.log(`api rodando ` + port);