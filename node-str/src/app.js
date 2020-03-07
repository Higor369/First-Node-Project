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



const Product = require('./models/products');
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