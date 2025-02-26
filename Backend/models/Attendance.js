const mongoose = require('mongoose');

const AttendanceSchema = mongoose.Schema({
    student : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : "true"
    },
    course : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course",
        required : "true"
    },
    date : {
        type : Date ,
        default : Date.now
    },
    status : {
        type : String,
        enum :  ["present" , "absent"], 
        required : "true"
    },
});


module.exports = mongoose.model("Attendance",AttendanceSchema);