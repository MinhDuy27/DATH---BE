const notificationsmodel  = require("../models/notifications");
class notificationsrepository {

  async getnotify(type) {
    try {
        if (type == true){
            const value = await notificationsmodel.find().lean()
            return value
        }
        else{
            const value = await notificationsmodel.find({type: type}).lean()
            return value
        }
    } catch (error) { 
        next(error)
    }
}

  async markasread(_id){
    try {
        if (_id == true){
            const value = await notificationsmodel.updateMany({},{flag :true})
            return value
        }
        else{
            const value = await notificationsmodel.updateOne({_id:_id},{flag: true})
            return value
        }
    } catch (error) { 
        next(error)
    }
  }
}

module.exports = notificationsrepository;