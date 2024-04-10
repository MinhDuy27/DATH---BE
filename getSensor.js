const axios = require('axios')

const deviceAPI = axios.create({
    baseURL: 'https://io.adafruit.com/api/v2/hungtruongthuan/',
    headers:{
        'Content-Type': 'application/json',
        'X-AIO-Key': 'aio_EkKC668DfVvZpkaXjVUcpM2yDTmB',
    },
});

module.exports.getSensorsInfo = async (path) => {
    const response = await deviceAPI.get(path)
    .then ((response) => {
        return response
    })
    .catch((error) => {
        return (error);
    })
    return response;
};