const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const validator = require('../validators/fluentValidator');
const repositorie = require('../repositories/customerRepositorie');
const md5 = require('md5');
const emailservice = require('../services/email');
const authService = require('../services/autorizador');

exports.post=async(req,res,next) =>{ //rota padrao
    var contract = new validator();
    contract.hasMinLen(req.body.name,3,"error");

   


    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
    }
    var customer = new Customer();
    customer.name = req.body.name;
    customer.email = req.body.email;
    customer.password = md5(req.body.password + global.SALT_KEY) ; // encriptando a senha 

    try{
    var resp = await repositorie.create(customer);
    emailservice.send(customer.email,'teste', global.EMAIL_TMPL.replace('{0}', customer.name));    


    res.status(201);
    }catch(e){
        res.status(400).send(e);
    }

};

exports.authenticate = async(req, res, next) => {
    try {
        const customer = await repositorie.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if (!customer) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            id: customer._id,
            email: customer.email,
            name: customer.name,
            roles: customer.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.refreshToken = async(req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const customer = await repositorie.getById(data.id);

        if (!customer) {
            res.status(404).send({
                message: 'Cliente não encontrado'
            });
            return;
        }

        const tokenData = await authService.generateToken({
            id: customer._id,
            email: customer.email,
            name: customer.name,
            roles: customer.roles
        });

        res.status(201).send({
            token: tokenData, //send token ou tokendata ?
            data: {
                email: customer.email,
                name: customer.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};