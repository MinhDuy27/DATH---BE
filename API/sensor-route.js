const sensorservice = require("../service/sensors-service");
// const userauth = require("./middlewares/auth");

module.exports = (app) => {
  const service = new sensorservice();
  app.patch("/sensors/set", async (req, res, next) => {
    try{
      const { name, high,low } = req.body;
      const  response = await service.setbound({ name, high,low });
     return  res.status(200).json({message: "success"})
    }
    catch(error){
      next(error)
    }
  });
  app.get("/sensors/:name", async (req, res, next) => {
    try{
        const {name} = req.params;
        const response = await service.getbound(name)
        return res.status(200).json({high : response.high,low : response.low})
    }
    catch(error){
      next(error)
    }
  });
  
}