const { cliente } = require('../models');

class ClienteController {
    async store(req, res){
        const {nome, cpf} = req.body;
        const Cliente = await cliente.create({nome, cpf})
        return res.status(200).json(Cliente)
    }
    async index(req, res){
        const clientes = await cliente.findAll();
        return res.status(200).json(clientes)
    }
}

module.exports = new ClienteController();