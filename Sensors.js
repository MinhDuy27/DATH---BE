const {getSensorsInfo} = require('./getSensor')
const {setnotify} = require('./create-notification')
fetchData = async (req,res,next) =>{
    try{
        const [temperature,humidity,light] = await Promise.all([
            getSensorsInfo('feeds/temp-sensor/data'),
            getSensorsInfo('feeds/humidity-sensor/data'),
            getSensorsInfo('feeds/lighting-sensor/data')
        ]);
            setnotify((String(temperature.data.feed_key),Number(temperature.data.value)))
            setnotify((String(humidity.data.feed_key),Number(humidity.data.value)))
            setnotify((String(light.data.feed_key),Number(light.data.value)))
    }
    catch(error){
        throw error
    }
};
fetchData();