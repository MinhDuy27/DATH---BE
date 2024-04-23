const usersmodel  = require("../models/users");
class usersrepository {
  async createusers({ username,password,name,salt }) {
      const users = new usersmodel({
        username,
        password,
        name,
        salt,
      });
      return await users.save();
  }
  async findusers( username ) {
    let result = await usersmodel.findOne({ username: username }).lean(); 
    return result;
}
  async changepassword({username,userpassword}){
        const query = { username: username };
        const update = { $set: { password: userpassword }};
        const options = {};
        return await usersmodel.updateOne(query, update, options)
  }
  async sendfeedback(_id,content){
      const existingusers = await usersmodel.findById(_id).select('feedback');
      let writingday = new Date().toLocaleString();
      const newfeedback = {
        content,
        writingday
      };
      existingusers.feedback.push(newfeedback);
      return existingusers.save();
  }
  async findusersbyid( id ) {
      const existingusers = await usersmodel.findById(id);
      return existingusers;
  }
  
}

module.exports = usersrepository;