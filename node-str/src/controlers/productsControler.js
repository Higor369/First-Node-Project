
const mongoose = require('mongoose');
const Product = mongoose.model('Products');
const validator = require('../validators/fluentValidator');
const repositorie = require('../repositories/productsRepositories');

exports.get = async(req,res,next) =>{ //exemplo com await com acesso ao repositorio
    try{
     var data = await repositorie.get();
     res.status(200).send(data);
    }
    catch(e){
        res.status(500).send(e);
    }

}

exports.getBySlug = async(req,res,next) =>{ // exemplo com await sem acesso ao repositorio 
    try{
    var data = await Product.find({ slug: req.params.slug,
        active: true},
        `title description price slug`);
    res.status(200).send(data);   
    }
    catch(e){
        res.status(500).send(e);
    }
}

exports.getById = (req,res,next) =>{ // exemplo com then para tornar metodo sincrono 
    Product.find({ slug: req.params.id,
        active: true},
        `title description price slug`)
    .then(x=>{
        res.status(200).send(req.body);
    }).catch(x=>{
        send({message: 'falha', data: x})
    });

}

exports.getByTag = (req,res,next) =>{
    Product.find({ slug: req.params.tag,
        active: true},
        `title description price slug`)
        .then(x=>{
        res.status(200).send(req.body);
    }).catch(x=>{
        send({message: 'falha', data: x})
    });

}

exports.post=(req,res,next) =>{ //rota padrao
    var contract = new validator();
    contract.hasMinLen(req.body.title,3,"error");

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
    }

    var product = new Product();
    product.title = req.body.title;

    product.save().then(x=>{
        res.status(201).send(req.body);
    }).catch(x=>{
        send({message: 'falha', data: x})
    });
    

};

exports.delete=(req,res,next) =>{ //rota padrao
    Product.findByIdAndRemove(req.params.id)
    .then(x=>{
        res.status(200).send(req.body);
    }).catch(x=>{
        send({message: 'falha', data: x})
    });
};

exports.put = (req,res,next) =>{
    Product.findByIdAndUpdate(req.params.id,{
        $set:{
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    }).then(x=>{
        res.status(200).send(req.body);
    }).catch(x=>{
        send({message: 'falha', data: x})
    });
}