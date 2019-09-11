

class Response{

    constructor(status,message){
        this.status = status;
        this.message = message;
    }

    toJson(){
        return {
            "status" : this.status,
            "message" : this.message,
        }
    }
}

module.exports = {Response}