const { Router } = require("express");
const usuarioController = require("./controllers/usuarioController");
const clienteController = require("./controllers/clienteController");
const servicoController = require("./controllers/servicoController");
const veiculoController = require("./controllers/veiculoController");



const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Server on" });
});
// Rotas de Produtos
routes.get("/usuario", usuarioController.index);
routes.post("/usuario", usuarioController.store);

routes.get("/cliente", clienteController.index);
routes.post("/cliente", clienteController.store);

routes.get("/servico", servicoController.index);
routes.post("/servico", servicoController.store);

routes.get("/veiculo", veiculoController.index);
routes.post("/veiculo", veiculoController.store);



module.exports = routes;
