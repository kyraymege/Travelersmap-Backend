const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins.js");
const userRoute = require("./routes/users.js");

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(()=>{
    console.log("MongoDB connected")
}).catch((error)=> console.log(error))

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(8800, ()=>{
    console.log("Backend server is running")
})