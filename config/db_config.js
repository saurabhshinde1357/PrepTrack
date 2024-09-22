const mongoose = require("mongoose");

mongoose.set("strictQuery", true)
mongoose.connect(`${process.env.DATABASE}`).then(()=>{
    console.log("connection successful");
}, (e)=>{
    console.log("database connection error");
});