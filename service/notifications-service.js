const { notificationsrepository } = require("../Database");

//logic
class notificationsservice {
    constructor() {
        this.repository = new notificatiosrepository();
    }
    async getnotify(type) {
        const object = await this.repository.getnotify( type); 
        return object
    }

    async markasread(id) {
        const object = await this.repository.markasread( id); 
        return object
    }

}

module.exports = notificationsservice;