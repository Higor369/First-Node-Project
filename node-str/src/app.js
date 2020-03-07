const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const uri = "mongodb+srv://higor:h7654321@cursonode-d79zs.azure.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

const app = express();

//carrega rotas 
const index = require(`./routes/index`);
const products = require(`./routes/products`);
const costumer = require('./routes/customerRoute');
const order = require('./controlers/orderControler');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //codifica url 

app.use('/customers', costumer);
app.use(`/`, index); //barra como prefixo apenas
app.use('/products', products);
app.use('/order', order);


module.exports = app;