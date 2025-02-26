const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    name : {
        type : "String",
        required : "true"
    },
    code : {
        type : "String",
        required : "true",
        unique : "true"
    },
    faculty : {
        type :  mongoose.Schema.Types.ObjectId , ref : "User" , required : "true"
    },
    students : [{ type : mongoose.Schema.Types.ObjectId, ref: "User"}]
});


module.exports = mongoose.model("Course",CourseSchema);