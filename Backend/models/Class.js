const mongoose = require("mongoose");

const ClassSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    students : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    couseses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }],
});

module.exports = mongoose.model("Class", ClassSchema);
