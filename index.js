require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const { mealItems, user, foodItems} = require("./controllers/getControllers");
const { addFoodItems, addMealItems, addUser } = require("./controllers/postControllers");
const { patchMealItems, patchUser } = require("./controllers/patchControllers");
// const ObjectId = require("mongodb").ObjectId;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const url = process.env.URL;
mongoose.connect(url).then(()=>console.log("Database Connected !")).catch((err)=>console.log(err));

// GET Methods
app.get("/foodItems", foodItems);
app.get("/mealItems", mealItems);
app.get("/user", user);

// POST APIs
app.post("/addFoodItems", addFoodItems);
app.post("/addMealItems/", addMealItems);
app.post("/addUser/", addUser);

// PATCH Methods
app.patch("/mealItems/:id", patchMealItems)
app.patch("/user/:id", patchUser)

app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:${PORT}`);
    console.log(`App running on http://127.0.0.1:${PORT}`);
});



