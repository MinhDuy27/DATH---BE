const sensorservice = require("../service/sensors-service");

module.exports = (app) => {
  const service = new sensorservice();
  app.post("/sensors/set", async (req, res, next) => {
    try{
      const { name, high,low } = req.body;
      const   reponse = await service.setbound({ name, high,low });
     return  res.status(200).json({"message": success})
    }
    catch(error){
      next(error)
    }
  });
  
 

}