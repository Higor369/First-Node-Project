exports.post('/',(req,res,next) =>{ //rota padrao
    res.status(201).send(req.body);
});

exports.delete('/:id',(req,res,next) =>{ //rota padrao
    let id = req.params.id;
    res.status(200).send({item :req.body, id: id});
});

exports.put('/:id',(req,res,next) =>{ //rota padrao
    let id = req.params.id;
    res.status(201).send({item :req.body, id: id});
});