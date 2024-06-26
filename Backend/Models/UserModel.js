const {Schema, model} = require('../connection');

const myschema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    contact: {type:String},  
    address: {type:String},
    password: {type:String, required: true},
    cpassword: {type:String, required: true},
    role: {type:String, default: "user"},
    avatar: {type:String, default: "avatar_placeholder.png"},
    createdAt: Date
});

module.exports = model('users1',myschema);
