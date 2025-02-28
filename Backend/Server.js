const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/attandanceTracker",{
        useNewUrlParser : true,
        useUnifiedTopology : true,
}).then(()=>{console.log("Database connected successfully")})
.catch((err)=>{console.log("Database is not connected : ",err)})

app.get("/",(req,res)=>{
        res.send("Connected database via mongoose !");
})

app.listen(port,()=>{
        console.log(`Server started at ${port}`);
})
