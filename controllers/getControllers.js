const FoodItem = require("../models/foodItemSchema");
const Meal = require("../models/mealSchema");
const User = require("../models/userSchema");

exports.mealItems = async (req, res)=>{
    const value = await Meal.find({}).populate("foodItems");
    res.json(value);
}

exports.user = async (req, res)=>{
    const value = await User.find({}).populate("mealPlan");
    res.json(value).status(200);
}

exports.foodItems = async (req, res)=>{
    const value = await FoodItem.find({});
    res.json(value).status(200);
}