const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const router = express.Router();

mongoose.connect('mongodb+srv://higor:<h7654321>@cluster0-fhkdw.azure.mongodb.net/test?retryWrites=true&w=majority/',{useNewUrlParser: true,  useUnifiedTopology: true});
console.log(`foiii`);
//carrega rotas 
const index = require(`./routes/index`);
const products = require(`./routes/products`);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //codifica url 

app.use(`/`, index); //barra como prefixo apenas
app.use('/products', products);


module.exports = app;