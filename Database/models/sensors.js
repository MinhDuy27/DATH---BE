const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorschema = new Schema({
    name: String,
    high: Number,
    low: Number
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
module.exports = mongoose.model('sensors',sensorschema);