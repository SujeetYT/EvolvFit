require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const { addFoodItems, addMealItems } = require("./controllers/controllers");
const Meal = require("./models/mealSchema");
// const ObjectId = require("mongodb").ObjectId;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const url = process.env.URL;
mongoose.connect(url).then(()=>console.log("Database Connected")).catch((err)=>console.log(err));

app.get("/addMealItems", async (req, res)=>{
    const value = await Meal.find({}).populate("foodItems", "calories ");
    res.json(value);
});

// POST APIs
app.post("/addFoodItems", addFoodItems);
app.post("/addMealItems/", addMealItems);


app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:${PORT}`);
    console.log(`App running on http://127.0.0.1:${PORT}`);
});



