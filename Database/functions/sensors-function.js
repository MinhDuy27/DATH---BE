const sensorsmodel  = require("../models/sensors");
class sensorsrepository {

  async findbyname( name ) {
    return  await sensorsmodel.findOne({ name: name }).lean(); 
}

  async setbound({name,high,low}){
        const query = { name: name };
        const update = { $set: { high: high,low : low }};
        const options = {};
        return await sensorsmodel.updateOne(query, update, options)
  }
}

module.exports = sensorsrepository;