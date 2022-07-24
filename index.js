require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const url = process.env.URL;
mongoose.connect(url).then(()=>console.log("Database Connected")).catch((err)=>console.log(err));



app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:3000`);
    console.log(`App running on http://127.0.0.1:3000`);
});