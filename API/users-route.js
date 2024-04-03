const usersservice = require("../service/users-service");
const userauth = require("./middlewares/auth");

module.exports = (app) => {
  const service = new usersservice();
  app.post("/users/signup", async (req, res, next) => {
    try{
      const { username, password,name } = req.body;
      const   mydata   = await service.signup({ username, password, name });
     return  res.status(200).json(mydata)
    }
    catch(error){
      next(error)
    }
  });
  
  app.put("/users/changepassword",userauth, async (req, res, next) => {
    try {
      const { username,oldpassword,newpassword} = req.body;
      const   mydata   = await service.changepassword({ username,oldpassword,newpassword }); 
      return res.status(200).json("password changed")
    } catch (error) {
      next(error)
    }
      
  });

  app.post("/users/login", async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const  data  = await service.login({ username, password });
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
      
  });
  // get profile info
  app.get("/users/profile", userauth, async (req, res, next) => {
    try {
      const { _id} = req.user;
      const  data  = await service.getprofile( _id );
      return res.json(data);
    } catch (error) {
      next(error);
    }
  });

}