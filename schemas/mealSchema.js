const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    category: {
        type: String,
        enum:["Breakfast", "Lunch", "Evening Snack", "Dinner"]
    },
    name: String,
    foodItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodItem"
    }],
});

const meal = mongoose.model("meal", mealSchema);
module.exports = meal;