const express = require('express');
const router = express.Router();

const controler = require(`../controlers/productsControler`);

var create = router.post('/', controler.post);

var put = router.put('/:id', controler.put);

var del = router.delete('/:id',controler.delete);

module.exports = router;