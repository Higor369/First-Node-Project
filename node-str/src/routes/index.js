const express = require('express');
const router = express.Router();


var route = router.get('/',(req,res,next) =>{ //rota padrao
    res.status(200).send({
        title: `testando api`,
        version: `1`
    });
});

module.exports = router;