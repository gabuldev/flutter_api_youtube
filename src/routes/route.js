const { Security } = require("../config/security");

//  MY CONTROLLERS

const { UsuarioController } = require("../controllers/usuario_controller");
const { EnterpriseController } = require("../controllers/enterprise_controller");


class Route {
  static init(server) {
    //ROUTES - USER
    server.post("/user", UsuarioController.createAccount);
    server.post("/sign_in", UsuarioController.login, Security.signIn);
    
    //ROUTES - ENTERPRISE
    server.post("/enterprise",Security.verifyJWT,EnterpriseController.createEnterprise);
    server.get("/enterprises",Security.verifyJWT,EnterpriseController.getEnterprise);
    server.get("/enterprises/:id",Security.verifyJWT,EnterpriseController.getEnterprise);
  }

}

module.exports = { Route };
