const db = require('../config/firestoreConfig');

exports.post = (req, res) => {  
    read()
        .then(sucess => sucess.forEach(doc => {
            console.log(doc.data())
            res.status(201).send(JSON.stringify(doc.data()));
        }))
        .catch(err => {
            res.status(201).send('Requisição recebida com sucesso! ');
        })
   
};

exports.put = (req, res) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};


async function read() {
    return await db.collection('FirstCollection').get();
  
}