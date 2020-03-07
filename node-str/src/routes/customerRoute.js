const express = require('express');
const router = express.Router();
const authService = require('../services/autorizador');
const controler = require(`../controlers/customersControler`);

router.post('/', controler.post);
router.authenticate('/autenticar', controler.authenticate);
router.post('/refresh',authService.authorize, controler.refreshToken);

module.exports = router