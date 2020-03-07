
const mongoose = require('mongoose');
const Product = mongoose.model('Products');


exports.get = (req,res,next) =>{
    Product.find({ active: true},`title price slug`).
    then(x=>{
        res.status(200).send(req.body);
    }).catch(x=>{
        send({message: 'falha', data: x})
    });

}

exports.getBySlug = (req,res,next) =>{
    Product.find({ slug: req.params.slug,
        active: true},
        `title description price slug`).
    then(x=>{
        res.status(200).send(req.body);
    }).catch(x=>{
        send({message: 'falha', data: x})
    });

}

exports.getById = (req,res,next) =>{
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