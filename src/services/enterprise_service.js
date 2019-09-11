const { EnterpriseRepo } = require("../repositors/enterprise_repo");
const { Enterprise } = require("../models/enterprise");
const { Response } = require("../models/response");

class EnterpriseService {
  static async create(body) {
    var repo;
    var response;
    response = await EnterpriseRepo.insert(body);

    if (response.insert_enterprise.affected_rows > 0) {
      return new Response(201, { message: "Enterprise criada com sucesso!" });
    } else {
      return new Response(403, {
        message: "Não foi possível criar a Enterprise"
      });
    }
  }

  static async get(enterprise) {
    var response;
   
    if (enterprise.name != null && enterprise.enterprise_types != null) {
    
     response = await EnterpriseRepo.getByTypeName(enterprise.enterprise_types,enterprise.name);
    } else if (enterprise.name != null && enterprise.enterprise_types == null) {
    
      response = await EnterpriseRepo.getByName(enterprise.name);
    }
    else if (enterprise.name == null && enterprise.enterprise_types != null) {
     
        response = await EnterpriseRepo.getByType(enterprise.enterprise_types);
      } 
    else if(enterprise.id != null) {
   
      response = await EnterpriseRepo.getById(enterprise.id);
    }
    else{
   
        response = await EnterpriseRepo.getAll();
    }

    if (response == null)
      return new Response(404, { message: "Nenhuma Enterprise encontrada!" });
    else{

        if(response.enterprise.length > 0)
             return new Response(200,response.enterprise)   
        else
            return new Response(404, { message: "Nenhuma Enterprise encontrada!" })    
        }
  }
}

module.exports = { EnterpriseService };
