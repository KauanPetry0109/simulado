const { servico } = require('../models');

class ServicoController {
    async store(req, res){
        const {data, descricao, valor} = req.body;
        const Servico = await servico.create({data, descricao, valor})
        return res.status(200).json(Servico)
    }
    async index(req, res){
        const Servicos = await servico.findAll();
        return res.status(200).json(Servicos)
    }
}

module.exports = new ServicoController();