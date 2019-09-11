const {UsuarioService} = require("../services/usuario_service");
const {Usuario} = require("../models/usuario");

class UsuarioController{

    
    static async createAccount(req,res,next){
        try{
        var result = await  UsuarioService.createAccount(req.body);
        return res.send(result.status,result.message);
        }catch(e){
            console.log("ERROR: Create Account",e)
            return res.send(500,{"message": "Erro interno servidor"}); 
        }
    }

    static async login(req,res,next){
        try{
        var result = await  UsuarioService.login(req.body);
        
        if(result.status == 200){
            req.user = result.message.data;
            next();
        }
        else{
        return res.send(result.status,result.message);
        }
        }catch(e){
            console.log("ERROR: Realizando Login",e)
            return res.send(500,{"message": "Erro interno servidor"}); 
        }
    }
}

module.exports={UsuarioController}