const { notificationsrepository } = require("../Database");

//logic
class notificationsservice {
    constructor() {
        this.repository = new notificationsrepository();
    }
    async getnotify(type) {
        const object = await this.repository.getnotify( type); 
        return object
    }

    async markasread(_id) {
        const object = await this.repository.markasread(_id); 
        return object
    }

}

module.exports = notificationsservice;