const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const validator = require('../validators/fluentValidator');
const repositorie = require('../repositories/orderRepositorie');
const guid = require('guid');

exports.post = async(req,res,next) => {
    var data = req.body;
    data.number = guid.raw().substring(0,6);
    try{
        await repositorie.create({
            customer: data.id,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(200);
    }catch(e){
        res.status(400);
    }
}

exports.get =  async(req,res,next) => {
   
    try{
        var result = await repositorie.get()
        res.status(200).send(result);
    }catch(e){
        res.status(400);
    }
}