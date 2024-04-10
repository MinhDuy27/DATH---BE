const sensorsmodel = require('./Database/models/sensors')
const notificationsmodel = require('./Database/models/notifications')
module.exports.setnotify = async (name,value) =>{
    try {
    const object = await sensorsmodel.findOne({ name: name }); 
        if (value > object.high)
        {
          const notify = new notificationsmodel({
            name: name,
            value: value,
            time: Date.now(),
            type: "Vượt ngưỡng",
            flag: false
          })
          await notify.save()
          return true
        }
    
        if (value < object.low)
        {
          const notify = new notificationsmodel({
            name: name,
            value: value,
            time: Date.now(),
            type: "Dưới ngưỡng",
            flag: false
          })   
          await notify.save()
          return true
        }
        return false
    } catch (error) {
        throw error
    } 
  };