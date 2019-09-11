const {EnterpriseService} = require("../services/enterprise_service");


class EnterpriseController{


    static async createEnterprise(req,res,next){
        try{
        var result = await EnterpriseService.create(req.body);
        return res.send(result.status,result.message);
        }catch(e){
            console.log("ERROR: Create Enterprise",e)
            return res.send(500,{"message": "Erro interno servidor"}); 
        }
    }


    static async getEnterprise(req,res,next){
        try{
            console.log("id ",req.params.id);
            var enterprise;
            var result
            if(req.params.id != null)
            enterprise = {id:req.params.id};
            else
            enterprise = req.query;

            result = await EnterpriseService.get(enterprise);
            return res.send(result.status,result.message);

            
        }catch(e){
            console.log("ERROR: Get Enterprise",e);
            return res.send(500,{"message":"Erro interno no servidor!"});
        }

    }
}

module.exports={EnterpriseController};