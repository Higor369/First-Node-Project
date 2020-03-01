const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //codifica url 

var route = router.get('/',(req,res,next) =>{ //rota padrao
    res.status(200).send({
        title: `testando api`,
        version: `1`
    });
});

var create = router.post('/',(req,res,next) =>{ //rota padrao
    res.status(201).send(req.body);
});



app.use(`/`, route); //barra como prefixo apenas
app.use('/products', create);

module.exports = app;