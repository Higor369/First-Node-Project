const express = require('express');
const router = express.Router();

const controler = require(`../controlers/orderControler`);

router.post('/',controler.post);
router.get('/', controler.get);

module.exports = router