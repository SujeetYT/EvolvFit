require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
// const ObjectId = require("mongodb").ObjectId;
const foodItem = require("./schemas/foodItemSchema");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const url = process.env.URL;
mongoose.connect(url).then(()=>console.log("Database Connected")).catch((err)=>console.log(err));

// POST APIs
app.post("/addFoodItems", addFoodItems);


app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:3000`);
    console.log(`App running on http://127.0.0.1:3000`);
});

function addFoodItems(req, res){
    console.log(req.body);
    const {name, calories, protien, carb, fat, acceptedUnits, itemWeight} = req.body;
    const newFootItem = new foodItem({name, calories, protien, carb, fat, acceptedUnits, itemWeight});
    newFootItem.save().then(()=>{
        return res.status(201).json({
            message: "document created successfully"
          });
    }).catch((err)=>{
        res.send(err.message);
    })
}