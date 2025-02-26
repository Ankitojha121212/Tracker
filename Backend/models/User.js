const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    role  : {
            type : String,
            enum : [
                "student" , "faculty" ,"admin"
            ], default : "student"
    },
    courses :  [{type : mongoose.Schema.Types.ObjectId,ref:"Course"}], // for Students

    coursesTought :  [{type : mongoose.Schema.Types.ObjectId, ref: "Course"}], // for  faculty
});

module.exports = mongoose.model("User",UserSchema);