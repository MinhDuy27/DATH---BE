const sensorsmodel = require('./Database/models/sensors')
module.exports.setnotify = async ({name,value}) =>{
    try {
      const object = await sensorsmodel.findOne({ name: name }); 
        if (value > object.high)
        {
          const notify = new notificationsmodel({
            name: name,
            Content: "Phát hiện vượt ngưỡng:" + toString(value),
            time: Date.now(),
            type: "threshold",
            flag: false
          })
          return notify
        }
    
        if (value < object.low)
        {
          const notify = new notificationsmodel({
            name: name,
            Content: "Phát hiện dưới ngưỡng:" + toString(value),
            time: Date.now(),
            type: "threshold",
            flag: false
          })
          return notify
        }
    } catch (error) {
        throw error
    } 
  };