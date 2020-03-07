const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const validator = require('../validators/fluentValidator');
const repositorie = require('../repositories/customerRepositorie');

exports.post=async(req,res,next) =>{ //rota padrao
    var contract = new validator();
    contract.hasMinLen(req.body.name,3,"error");

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
    }
    var customer = new Customer();
    customer.name = req.body.name;
    try{
    var resp = await repositorie.create(customer);
    res.status(201);
    }catch(e){
        res.status(400).send(e);
    }

};
