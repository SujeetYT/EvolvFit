const Meal = require("../models/mealSchema");
const User = require("../models/userSchema");

exports.patchMealItems = async (req, res)=>{
    try {
        const _id = req.params.id;
        const updateValue = await Meal.findByIdAndUpdate(_id, req.body);
        console.log(updateValue, _id); 
        res.send("Meal Updated");
    } catch (error) {
        res.send(error);
    }
}

exports.patchUser = async (req, res)=>{
    try {
        const _id = req.params.id;
        const updateValue = await User.findByIdAndUpdate(_id, req.body);
        console.log(updateValue, _id); 
        res.send("Meal Plan Updated");
    } catch (error) {
        res.send(error);
    }
}