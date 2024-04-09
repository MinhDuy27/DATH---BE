const { sensorsrepository } = require("../Database");
const { internalError } = require("../Database/side-function/app-error");


//logic
class usersservice {
    constructor() {
        this.repository = new sensorsrepository();
    }
    async setbound(input) {

        const { name, high,low } = input;
        const object = await this.repository.findbyname( name );
        const response = None
        if (!object)
            throw new notfoundError("invalid Name")
        else{
            response = await this.repository.setbound({name:name,high: high,low: low})
        }
        if (response == None)
            throw internalError("get unexpected error, try again")
    }
}

module.exports = usersservice;