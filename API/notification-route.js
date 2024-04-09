const notificationsservice = require("../service/notifications-service");

module.exports = (app) => {
  const service = new notificationsservice();
  app.get("/notifications/all", async (req, res, next) => {
    try{
      const  reponse = await service.getnotify(true);
     return  res.status(200).json(reponse)
    }
    catch(error){
      next(error)
    }
  });
  app.get("/notifications/type", async (req, res, next) => {
    try{
      const { type } = req.body;
      const  reponse = await service.getnotify(type);
     return  res.status(200).json(reponse)
    }
    catch(error){
      next(error)
    }
  });
  app.patch("/notifications/markbyid", async (req, res, next) => {
    try{
      const { id } = req.body;
      const reponse = await service.markasread(id);
     return  res.status(200).json("message: Done")
    }
    catch(error){
      next(error)
    }
  });
  app.patch("/notifications/markall", async (req, res, next) => {
    try{
      const  reponse = await service.markasread(true);
      return  res.status(200).json("message:Done")
    }
    catch(error){
      next(error)
    }
  });
  
 

}