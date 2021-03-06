const express = require('express');
const router = express.Router();

const controler = require(`../controlers/productsControler`);

const autenticador = require('../services/autorizador');

 router.post('/',autenticador.authorize, controler.post);

 router.put('/:id', controler.put);
router.get('/', controler.get);
router.get('/slug/:slug',controler.getBySlug);
router.get('/id/:id', controler.getById);
router.get('/tag/:tag', controler.getByTag);
 router.delete('/:id',controler.delete);


module.exports = router;