const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersschema = new Schema({
    salt: String,
    password: String,
    username:String,
    name : String
},{
    toJSON: {
        transform(doc, ret){
            delete ret.password;
            delete ret.__v;
            delete ret.salt;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: false
}
)
module.exports = mongoose.model('users',usersschema);