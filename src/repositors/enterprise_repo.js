const {Hasura} = require("../config/hasura");
const{Enterprise} = require("../models/enterprise");

class EnterpriseRepo{



 //? STATIC METHODS

   static async insert(data){
      return  Hasura.send(Enterprise.insert(data))
    }


   static async getAll(){
        return Hasura.send(Enterprise.getAll()); 
    }

    static async getById(id){
        return Hasura.send(Enterprise.getById(id)); 
    }
    static async getByName(name){
        return Hasura.send(Enterprise.getByName(name)); 
    }

    static async getByType(type){
        return Hasura.send(Enterprise.getByType(type)); 
    }

    static async getByTypeName(type,name){
        return Hasura.send(Enterprise.getByTypeName(type,name)); 
    }

    /*

  static async getById(id){
        return Hasura.send(Enterprise.getById(id)); 
    }
    static async getAll(){
      return Hasura.send(Enterprise.getAll()); 
  }

  static async getSearchName(name){
    return Hasura.send(Enterprise.getSearchName(name)); 
}
*/





}

module.exports = {EnterpriseRepo}