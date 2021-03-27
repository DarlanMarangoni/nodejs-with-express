exports.post = (req, res) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = (req, res) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};