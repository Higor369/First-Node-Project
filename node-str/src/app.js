const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const uri = "mongodb+srv://higor:<h7654321>@cursonode-d79zs.azure.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
// client.connect(err => {
//     console.log('conectado com sucesso ao mongo')
//  // const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//  // client.close();
// });

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