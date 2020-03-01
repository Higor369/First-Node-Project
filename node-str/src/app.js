const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const router = express.Router();

//carrega rotas 
const index = require(`./routes/index`);
const products = require(`./routes/products`);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //codifica url 

app.use(`/`, index); //barra como prefixo apenas
app.use('/products', products);


module.exports = app;