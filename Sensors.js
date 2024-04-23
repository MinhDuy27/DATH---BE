const {getSensorsInfo} = require('./getSensor')
const {setnotify} = require('./create-notification')
module.exports.fetchData = async () =>{
    try{
            const [temperature,humidity,light,warning] = await Promise.all([
            getSensorsInfo('feeds/temp-sensor/data/next'),
            getSensorsInfo('feeds/humidity-sensor/data/next'),
            getSensorsInfo('feeds/lighting-sensor/data/next'),
            getSensorsInfo('feeds/warning/data/next'),
        ]);
        if(temperature.data)
        {
            value = await setnotify("temp-sensor",Number(temperature.data.value))
            if (value) 
                console.log("created temperature notification")
        } 
        if(humidity.data)
        {
            value = await setnotify("humidity-sensor",Number(humidity.data.value))
            if (value) 
                console.log("created humidity notification")
        } 
        if(light.data)
        {
            value = await setnotify("lighting-sensor",Number(light.data.value))
            if (value) 
                console.log("created lighting notification")
        } 
        if(warning.data)
        {
            value = await setnotify("warning",Number(warning.data.value))
            if (value) 
                console.log("created warning notification")
        } 

        return 0
    }
    catch(error){
        throw error
    }
};