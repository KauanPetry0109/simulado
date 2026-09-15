const { usuario } = require('../models');

class UsuarioController {
    async store(req, res){
        const {nome, email, senha} = req.body;
        const Usuario = await usuario.create({nome, email, senha})
        return res.status(200).json(Usuario)
    }
    async index(req, res){
        const usuarios = await usuario.findAll();
        return res.status(200).json(usuarios)
    }
}

module.exports = new UsuarioController();