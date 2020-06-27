exports.get = (req, res, next) => {
    res.status(200).send('\nRequisição recebida com sucesso!\n');
};
exports.post = (req, res, next) => {
    res.status(201).send('\nRequisição recebida com sucesso!\n');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`\nRequisição recebida com sucesso! ${id}\n`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`\nRequisição recebida com sucesso! ${id}\n`);
};