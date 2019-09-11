const {Hasura} = require("../config/hasura");
const{Usuario} = require("../models/usuario");

class UsuarioRepo{


    constructor(user){
        this.user = user;
    }


    async insert(){
      return  Hasura.send(this.user.insert())
    }

    async update(){
        return Hasura.send(this.user.update());
    }

 //? STATIC METHODS

   static async getByEmail(email){
        return Hasura.send(Usuario.getByEmail(email)); 
    }
}

module.exports = {UsuarioRepo}