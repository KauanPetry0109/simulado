const { veiculo } = require('../models');

class veiculoController {
    async store(req, res){
        const {modelo, placa} = req.body;
        const veiculo = await veiculo.create({modelo, placa})
        return res.status(200).json(veiculo)
    }
    async index(req, res){
        const veiculos = await veiculo.findAll();
        return res.status(200).json(veiculos)
    }
}

module.exports = new veiculoController();