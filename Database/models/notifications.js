const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationschema = new Schema({
    name: String,
    content: String,
    time: Date,
    type: String,
    flag : Boolean
},{
    toJSON: {
        transform(doc, ret){
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: false
}
)
module.exports = mongoose.model('notifications',notificationschema);