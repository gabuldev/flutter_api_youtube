const Joi = require("@hapi/joi");

module.exports={


    insert(body){
  
        var schema = Joi.object().keys({
            investor_name: Joi.string().max(100).min(1).required(),
            city: Joi.string().max(50).min(1).required(),
            balance: Joi.any(),
            email: Joi.string().email({minDomainSegments : 2}).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            super_angel : Joi.any(),
            portfolio_value : Joi.any(),
            enterprise: Joi.any(),
            country : Joi.any(),
            photo : Joi.any()
        });

        const result = Joi.validate(body,schema);
        if(result.error == null)
            return {
                value : true,
                data : {message : ""}
            };
        else
            return {
                valeu : false,
                data : {message : result.error.message}
            };;    

    }


}