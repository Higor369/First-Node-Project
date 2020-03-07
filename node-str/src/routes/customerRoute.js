const express = require('express');
const router = express.Router();

const controler = require(`../controlers/customersControler`);

router.post('/', controler.post);

module.exports = router