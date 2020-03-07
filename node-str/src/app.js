const express = require('express');
const bodyParser = require('body-parser');
const config = require(`../cnfig`);

const mongoose = require('mongoose');
const uri = config.connectionString;

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


//habilitando cors
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/customers', costumer);
app.use(`/`, index); //barra como prefixo apenas
app.use('/products', products);
app.use('/order', order);


module.exports = app;