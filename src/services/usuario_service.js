const { UsuarioRepo } = require("../repositors/usuario_repo");
const { Usuario } = require("../models/usuario");
const { Response } = require("../models/response")
const {Security} = require("../config/security");
const validator = require("../validators/usuario_validators");
const bcrypt = require('bcrypt');

class UsuarioService {



    static async createAccount(body) {
        var user = body;
        //Validate in JOI
        var validate = validator.insert(user);
        console.log(validate)
        //Verify email
        var verify;
        var repo;
        var response;

        if (validate.value == true) {

            verify = await UsuarioRepo.getByEmail(user.email);
            if (verify.user.length == 0) {
                user.password = bcrypt.hashSync(body.password, 10);
                repo = new UsuarioRepo(Usuario.fromJson(user));

                response = await repo.insert();
                if (response.insert_user.affected_rows > 0 ) {
                    return new Response(201, {"message":"Conta criada com suceso!"})
                }
                else {
                    return new Response(403, {"message":"Não foi possível criar a conta"})
                }
            }
            else {
                return new Response(401, {"message":"Uma conta já existe com esse e-mail!"});
            }
        } else {
            //ERRO DE VALIDAÇÃO NO JOI
            return new Response(400, validate.data);
        }
    }

    static async login(body){

        var verify = await UsuarioRepo.getByEmail(body.email);
        var user;
        var password;

        if(verify.user.length==1){
            user = verify.user[0];
            password = await bcrypt.compareSync(body.password,user.password);

               if(password){
                   return new Response(200,{"data": Usuario.fromGraphQL(user)});
               }
               else{
                   return new Response(401,{"message":"Email e/ou senha inválidos"})
               } 

        }
        else{
            return new Response(404,{"message":"Conta inexistente!"})
        }

    }
}

module.exports = { UsuarioService }